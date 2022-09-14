import './styles.module.scss';
import ButtonComponent from '../../Input/Button/ButtonComponent';

const HeaderComponent = () => {
  const menus = ['About', 'Pricing', 'Contact'];

  return (
    <header>
      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index}>
              <h1>{menu}</h1>
            </li>
          ))}
        </ul>
      </nav>

      <ButtonComponent text={'Login'} onClick={() => {console.log("Login")}} />
    </header>
  );
};

export default HeaderComponent;
