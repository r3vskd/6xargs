import { useState, useEffect, useRef } from 'react';

interface TerminalLine {
  id: number;
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp?: string;
}

export default function TerminalCLI() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { id: 1, type: 'output', content: '6xargs CLI v2.1.0 - AI-Powered Security Agent' },
    { id: 2, type: 'output', content: 'Type "help" for available commands' },
    { id: 3, type: 'output', content: '' },
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: [
      'Available commands:',
      '  scan <target>     - Start vulnerability scan',
      '  analyze <file>    - Analyze security report',
      '  status           - Show scan status',
      '  history          - Show command history',
      '  clear            - Clear terminal',
      '  exit             - Exit CLI'
    ],
    scan: [
      'Initializing AI-powered vulnerability scanner...',
      'Loading security modules...',
      'Starting reconnaissance phase...',
      '✓ Port scanning completed',
      '✓ Service enumeration finished',
      '✓ Vulnerability assessment in progress...',
      'Found 3 potential vulnerabilities',
      'Scan completed successfully'
    ],
    analyze: [
      'Loading security report...',
      'Applying AI analysis algorithms...',
      '✓ CVSS score calculated: 7.8 (High)',
      '✓ Exploit probability: 85%',
      '✓ Remediation suggestions generated',
      'Analysis complete'
    ],
    status: [
      'System Status: Online',
      'Active scans: 2',
      'Completed scans: 47',
      'AI Engine: Operational',
      'Last update: 2 minutes ago'
    ],
    clear: [],
    exit: ['Goodbye! Thanks for using 6xargs CLI']
  };

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const [baseCmd] = trimmedCmd.split(' ');
    
    // Add command to history
    const newCommandLine: TerminalLine = {
      id: Date.now(),
      type: 'command',
      content: `$ ${cmd}`,
      timestamp: new Date().toLocaleTimeString()
    };

    if (baseCmd === 'clear') {
      setLines([
        { id: 1, type: 'output', content: '6xargs CLI v2.1.0 - AI-Powered Security Agent' },
        { id: 2, type: 'output', content: 'Type "help" for available commands' },
        { id: 3, type: 'output', content: '' },
      ]);
      return;
    }

    setLines(prev => [...prev, newCommandLine]);

    // Simulate typing effect for output
    setIsTyping(true);
    
    setTimeout(() => {
      const output = commands[baseCmd as keyof typeof commands] || [`Command not found: ${baseCmd}. Type "help" for available commands.`];
      
      output.forEach((line, index) => {
        setTimeout(() => {
          const outputLine: TerminalLine = {
            id: Date.now() + index,
            type: baseCmd in commands ? 'output' : 'error',
            content: line
          };
          setLines(prev => [...prev, outputLine]);
          
          if (index === output.length - 1) {
            setIsTyping(false);
            // Add empty line after command output
            setTimeout(() => {
              setLines(prev => [...prev, { id: Date.now() + 1000, type: 'output', content: '' }]);
            }, 100);
          }
        }, index * 200);
      });
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && currentCommand.trim() && !isTyping) {
      executeCommand(currentCommand);
      setCurrentCommand('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    // Auto-focus input when component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <div className="terminal-controls">
          <div className="control-button close"></div>
          <div className="control-button minimize"></div>
          <div className="control-button maximize"></div>
        </div>
        <div className="terminal-title">6xargs CLI - AI Security Agent</div>
      </div>
      
      <div className="terminal-body" ref={terminalRef}>
        {lines.map((line) => (
          <div key={line.id} className={`terminal-line ${line.type}`}>
            {line.type === 'command' && (
              <span className="timestamp">[{line.timestamp}]</span>
            )}
            <span className="line-content">{line.content}</span>
          </div>
        ))}
        
        {!isTyping && (
          <div className="terminal-input-line">
            <span className="prompt">$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              onKeyPress={handleKeyPress}
              className="terminal-input"
              placeholder="Enter command..."
              disabled={isTyping}
            />
            <span className="cursor">|</span>
          </div>
        )}
        
        {isTyping && (
          <div className="typing-indicator">
            <span className="typing-dots">...</span>
          </div>
        )}
      </div>
    </div>
  );
}