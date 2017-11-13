import { configure } from '@storybook/react';

function loadStories() {
  require('../src/css/main.css');
  require('../src/components/RenderAllDecksComponent.story.js');
}
configure(loadStories, module);
