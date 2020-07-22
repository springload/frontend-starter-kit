/* eslint springload/import/first: 0 */
import './public-path'; // MUST be first (yes, before absolute imports)
import ComponentsInit from './components/components';

(function (): void {
  // Init site here
  ComponentsInit();
})();
