import { Selector } from 'testcafe';

fixture`First Offers`
  .page`https://xxxxxxxxxx`;

// Elements
const seeDetailsButtonElemet = Selector(() =>
  (document as any)
    .querySelector('rds-widget-first-offers')
    .shadowRoot.querySelector('rds-resource-extras')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[1]
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[0]
    .querySelector('rds-booster-card-vertical')
    .shadowRoot.querySelector('.button.is-small.is-primary.is-link'),
);

const boosterDetailsElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-first-offers')
    .shadowRoot.querySelector('rds-dialog')
    .shadowRoot.querySelector('.dialog__close'),
);

const lastOfferCardElement = Selector(
  () =>
    (document as any)
      .querySelector('rds-widget-first-offers')
      .shadowRoot.querySelector('rds-resource-extras')
      .shadowRoot.querySelector('slot')
      .assignedNodes()[1]
      .shadowRoot.querySelector('rds-carousel')
      .shadowRoot.querySelector('slot')
      .assignedNodes()[4],
);

const carouselPaginationElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-first-offers')
    .shadowRoot.querySelector('rds-resource-extras')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[1]
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('.rds-carousel-pagination-indicator'),
);

const boostButtonElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-first-offers')
    .shadowRoot.querySelector('rds-resource-extras')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[1]
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[0]
    .querySelector('rds-booster-card-vertical')
    .shadowRoot.querySelector('rds-booster-card-button')
    .shadowRoot.querySelector('.button.is-primary'),
);
const boostNotificationElemet = Selector(() =>
  (document as any).querySelector('rds-toast').shadowRoot.querySelector('rds-notification'),
);

//Tests
test('Loading the BTL component with all the offer cards', async t => {
  const btlSmartComponentExists = Selector('rds-widget-first-offers').exists;
  await t.expect(btlSmartComponentExists).ok();
});

test('Clicking on "See details" button to open the Booster Details', async t => {
  await t
    .click(seeDetailsButtonElemet)
    .expect(boosterDetailsElement.exists)
    .ok();
});

test('Closing the Booster Details to view all the available offer cards', async t => {
  await t
    .click(seeDetailsButtonElemet)
    .expect(boosterDetailsElement.exists)
    .ok()
    .click(boosterDetailsElement)
    .expect(boosterDetailsElement.exists)
    .notOk();
});

test('Clicking on the carousel pagination through the widget to view the rest of the offer cards', async t => {
  await t
    .click(carouselPaginationElement.sibling(0))
    .expect(lastOfferCardElement.exists)
    .ok();
});

test('Clicking on the Boost button to boost the offer and getting the notification saying You have now boosted and ready to shop!', async t => {
  await t
    .click(boostButtonElement)
    .expect(boostNotificationElemet.exists)
    .ok();
});
