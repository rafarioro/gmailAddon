export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Email App') // edit me!
    .addItem('Email App', 'openEmailSidebar')

  menu.addToUi();
};


export const openEmailSidebar = () => {
  const html = HtmlService.createHtmlOutputFromFile('email');
  SpreadsheetApp.getUi().showSidebar(html);
};