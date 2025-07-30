import { Link } from "@remix-run/react";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    username: "HackerUser",
    email: "hacker@example.com",
    avatar: "/assets/images/default-avatar.png"
  });

  return (
    <div className="profile-container">
      {/* Cabecera del perfil */}
      <div className="profile-header">
        <div className="profile-avatar">
          <img src={user.avatar} alt="Profile Avatar" />
          <div className="upload-overlay">Cambiar</div>
        </div>
        <div className="profile-info">
          <h1>{user.username}</h1>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Navegación del perfil */}
      <nav className="profile-nav">
        <Link to="/profile" className="profile-nav-item active">Perfil</Link>
        <Link to="/profile/settings" className="profile-nav-item">Configuración</Link>
        <Link to="/profile/security" className="profile-nav-item">Seguridad</Link>
        <Link to="/profile/wallet" className="profile-nav-item">Billetera</Link>
        <Link to="/profile/programs" className="profile-nav-item">Programas Activos</Link>
        <Link to="/profile/bounties" className="profile-nav-item">Recompensas</Link>
      </nav>

      {/* Contenido principal */}
      <div className="settings-container">
        <div className="settings-sidebar">
          <ul className="settings-menu">
            <li className="settings-menu-item active">
              <Link to="/profile/settings">Información General</Link>
            </li>
            <li className="settings-menu-item">
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
            <h2>Información del Perfil</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Nombre de Usuario</label>
                <input 
                  type="text" 
                  id="username" 
                  className="form-control" 
                  value={user.username} 
                  onChange={(e) => setUser({...user, username: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-control" 
                  value={user.email} 
                  onChange={(e) => setUser({...user, email: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="bio">Biografía</label>
                <textarea 
                  id="bio" 
                  className="form-control" 
                  rows={4}
                  placeholder="Cuéntanos sobre ti..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Guardar Cambios</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}