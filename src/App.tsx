import AppRouter from './Core/Navigation/AppRouter';
import SectionProvider from './Modules/Common/Presentation/Contexts/Section/SectionProvider';

function App() {
  return (
    <SectionProvider>
      <AppRouter />
    </SectionProvider>
  );
}

export default App;
