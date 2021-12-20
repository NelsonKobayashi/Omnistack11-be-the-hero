import heroesImg from '../../assets/liga.jpg';
import logo from '../../assets/logo.svg';
import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';
import api from '../../services/api'


export default function Logon() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });
      
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      navigate('/profile');

    } catch (err) {
      alert('Falha no Login, tente novamente.');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="Be The Hero" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img className="imagem" src={heroesImg} alt="Heroes" />
    </div>
  );
}