const {ui, Button} = require('tabris');

let crashlytics = FirebaseCrashlytics.initialise();

new Button({
  centerX: 0, centerY: 0,
  text: 'Crash app'
}).on({select: () => crashlytics.crash()})
  .appendTo(ui.contentView);
