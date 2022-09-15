import AppRouter from './Core/Navigation/AppRouter';
import SectionProvider from './Modules/Common/Presentation/Contexts/Section/SectionProvider';
import MasukModalProvider from './Modules/Common/Presentation/Contexts/MasukModal/MasukModelProvider';

function App() {
  return (
    <SectionProvider>
      <MasukModalProvider>
        <AppRouter />
      </MasukModalProvider>
    </SectionProvider>
  );
}

export default App;
