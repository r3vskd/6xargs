import { Link } from "@remix-run/react";
import { useState } from "react";

export default function SecurityPage() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  return (
    <div className="profile-container">
      {/* Cabecera del perfil (reutilizable como componente) */}
      <div className="profile-header">{
        /* Contenido similar al de _index.tsx */}
      </div>

      {/* Navegación del perfil */}
      <nav className="profile-nav">
        <Link to="/profile" className="profile-nav-item">Perfil</Link>
        <Link to="/profile/settings" className="profile-nav-item">Configuración</Link>
        <Link to="/profile/security" className="profile-nav-item active">Seguridad</Link>
        <Link to="/profile/wallet" className="profile-nav-item">Billetera</Link>
        <Link to="/profile/programs" className="profile-nav-item">Programas Activos</Link>
        <Link to="/profile/bounties" className="profile-nav-item">Recompensas</Link>
      </nav>

      {/* Contenido principal */}
      <div className="settings-container">
        <div className="settings-sidebar">
          <ul className="settings-menu">
            <li className="settings-menu-item">
              <Link to="/profile/settings">Información General</Link>
            </li>
            <li className="settings-menu-item active">
              <Link to="/profile/security">Seguridad</Link>
            </li>
            <li className="settings-menu-item">
              <Link to="/profile/wallet">Billetera</Link>
            </li>
            <li className="settings-menu-item">
              <Link to="/profile/programs">Programas Activos</Link>
            </li>
            <li className="settings-menu-item">
              <Link to="/profile/bounties">Recompensas</Link>
            </li>
          </ul>
        </div>

        <div className="settings-content">
          <div className="settings-section">
            <h2>Cambiar Contraseña</h2>
            <form>
              <div className="form-group">
                <label htmlFor="current-password">Contraseña Actual</label>
                <input type="password" id="current-password" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="new-password">Nueva Contraseña</label>
                <input type="password" id="new-password" className="form-control" />
              </div>
              
              <div className="form-group">
                <label htmlFor="confirm-password">Confirmar Nueva Contraseña</label>
                <input type="password" id="confirm-password" className="form-control" />
              </div>
              
              <button type="submit" className="btn btn-primary">Actualizar Contraseña</button>
            </form>
          </div>

          <div className="settings-section">
            <h2>Autenticación de Dos Factores (2FA)</h2>
            <p>Añade una capa adicional de seguridad a tu cuenta activando la autenticación de dos factores.</p>
            
            <div className="toggle-container">
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={twoFactorEnabled}
                  onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                />
                <span className="toggle-slider"></span>
              </label>
              <span>{twoFactorEnabled ? "2FA Activado" : "2FA Desactivado"}</span>
            </div>
            
            {twoFactorEnabled && (
              <div className="mt-4">
                <p>Escanea el código QR con tu aplicación de autenticación:</p>
                <div className="qr-code-container">
                  {/* Aquí iría la imagen del código QR */}
                  <div style={{ width: 200, height: 200, background: '#333', margin: '1rem 0' }}></div>
                </div>
                <p>O ingresa este código manualmente: <strong>ABCD 1234 EFGH 5678</strong></p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}