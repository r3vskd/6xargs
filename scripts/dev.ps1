#6xargs monorepo
param(
    [switch]$Clean,
    [switch]$Backend,
    [switch]$Frontend,
    [switch]$Docker,
    [switch]$Help
)

function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

function Show-Help {
    Write-ColorOutput "6xargs Development Environment" "Cyan"
    Write-ColorOutput "Usage: .\scripts\dev.ps1 [options]" "White"
    Write-ColorOutput ""
    Write-ColorOutput "Options:" "Yellow"
    Write-ColorOutput "  -Clean      Clean node_modules and build artifacts" "White"
    Write-ColorOutput "  -Backend    Start only backend development server" "White"
    Write-ColorOutput "  -Frontend   Start only frontend development server" "White"
    Write-ColorOutput "  -Docker     Use Docker for development environment" "White"
    Write-ColorOutput "  -Help       Show this help message" "White"
    Write-ColorOutput ""
    Write-ColorOutput "Examples:" "Yellow"
    Write-ColorOutput "  .\scripts\dev.ps1                 # Start both frontend and backend" "White"
    Write-ColorOutput "  .\scripts\dev.ps1 -Backend        # Start only backend" "White"
    Write-ColorOutput "  .\scripts\dev.ps1 -Clean          # Clean and start development" "White"
    Write-ColorOutput "  .\scripts\dev.ps1 -Docker         # Use Docker environment" "White"
}

if ($Help) {
    Show-Help
    exit 0
}

Write-ColorOutput "Starting 6xargs development environment..." "Cyan"

if ($Clean) {
    Write-ColorOutput "Cleaning previous builds and dependencies..." "Yellow"
    
    $foldersToClean = @(
        "node_modules",
        "apps\be\node_modules",
        "apps\fe\node_modules",
        "packages\shared\types\node_modules",
        "packages\shared\utils\node_modules",
        "packages\shared\constants\node_modules",
        "apps\be\dist",
        "apps\fe\build",
        "apps\fe\.cache",
        "packages\shared\types\dist",
        "packages\shared\utils\dist",
        "packages\shared\constants\dist"
    )
    
    foreach ($folder in $foldersToClean) {
        if (Test-Path $folder) {
            Write-ColorOutput "Removing $folder..." "Gray"
            Remove-Item -Recurse -Force $folder
        }
    }
}

if ($Docker) {
    Write-ColorOutput "Starting Docker development environment..." "Blue"
    
    if (!(Get-Command docker -ErrorAction SilentlyContinue)) {
        Write-ColorOutput "Docker is not installed or not in PATH" "Red"
        exit 1
    }
    
    $dockerStatus = docker info 2>$null
    if ($LASTEXITCODE -ne 0) {
        Write-ColorOutput "Docker is not running. Please start Docker Desktop." "Red"
        exit 1
    }
    
    Write-ColorOutput "Using docker-compose for development..." "Blue"
    docker-compose -f docker-compose.dev.yml up --build
    exit 0
}

Write-ColorOutput "Installing dependencies..." "Yellow"
npm ci --workspaces

if ($LASTEXITCODE -ne 0) {
    Write-ColorOutput "Failed to install dependencies" "Red"
    exit 1
}

Write-ColorOutput "Building shared packages..." "Yellow"
npm run build --workspace=@sixargs/types
npm run build --workspace=@sixargs/utils  
npm run build --workspace=@sixargs/constants

if ($Backend -and !$Frontend) {
    Write-ColorOutput "Starting backend development server..." "Green"
    Write-ColorOutput "Backend will be available at: http://localhost:3001" "Cyan"
    Write-ColorOutput "Press Ctrl+C to stop the server" "Gray"
    npm run dev --workspace=@sixargs/backend
}
elseif ($Frontend -and !$Backend) {
    Write-ColorOutput "Starting frontend development server..." "Green"
    Write-ColorOutput "Frontend will be available at: http://localhost:3000" "Cyan"
    Write-ColorOutput "Press Ctrl+C to stop the server" "Gray"
    npm run dev --workspace=@sixargs/frontend
}
else {
    Write-ColorOutput "Starting both frontend and backend development servers..." "Green"
    Write-ColorOutput "Frontend: http://localhost:3000" "Cyan"
    Write-ColorOutput "Backend: http://localhost:3001" "Cyan"
    Write-ColorOutput "Press Ctrl+C to stop all servers" "Gray"
    
    $frontendJob = Start-Job -ScriptBlock {
        Set-Location $using:PWD
        npm run dev --workspace=@sixargs/frontend
    }
    
    $backendJob = Start-Job -ScriptBlock {
        Set-Location $using:PWD
        npm run dev --workspace=@sixargs/backend
    }
    
    try {
        Write-ColorOutput "Development servers are running..." "Green"
        Write-ColorOutput "Waiting for servers to start..." "Yellow"
        
        while ($true) {
            Start-Sleep -Seconds 1
            
            if ($frontendJob.State -eq "Failed" -or $backendJob.State -eq "Failed") {
                Write-ColorOutput "One or more servers failed to start" "Red"
                break
            }
        }
    }
    finally {
        Write-ColorOutput "Stopping development servers..." "Yellow"
        Stop-Job $frontendJob, $backendJob -ErrorAction SilentlyContinue
        Remove-Job $frontendJob, $backendJob -ErrorAction SilentlyContinue
    }
}

Write-ColorOutput "Development environment ready!" "Green"