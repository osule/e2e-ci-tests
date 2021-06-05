import { Role, Selector } from 'testcafe';

fixture`Second Offers`
  .page`https://xxxxxxxxx`;

const boostButtonElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-tiger-first-offers')
    .shadowRoot.querySelector('rds-booster-offers-carousel')
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[0]
    .querySelector('rds-booster-card-horizontal')
    .shadowRoot.querySelector('rds-booster-card-button')
    .shadowRoot.querySelector('.button.is-small.is-primary'),
);

const readyToShopButtonElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-tiger-first-offers')
    .shadowRoot.querySelector('rds-booster-offers-carousel')
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('slot')
    .assignedNodes()[0]
    .querySelector('rds-booster-card-horizontal')
    .shadowRoot.querySelector('rds-booster-card-button')
    .shadowRoot.querySelector('.activate-label.tag'),
);

const carouselPaginationElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-tiger-first-offers')
    .shadowRoot.querySelector('rds-booster-offers-carousel')
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('.rds-carousel-pagination-indicator'),
);

const lastBoosterCardElement = Selector(
  () =>
    (document as any)
      .querySelector('rds-widget-tiger-first-offers')
      .shadowRoot.querySelector('rds-booster-offers-carousel')
      .shadowRoot.querySelector('rds-carousel')
      .shadowRoot.querySelector('slot')
      .assignedNodes()[3],
);

const availableButtonElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-tiger-first-offers')
    .shadowRoot.querySelector('rds-chips')
    .shadowRoot.querySelector('#available'),
);

const activatedOffersElement = Selector(() =>
  (document as any)
    .querySelector('rds-widget-tiger-first-offers')
    .shadowRoot.querySelector('rds-booster-offers-carousel')
    .shadowRoot.querySelector('rds-carousel')
    .shadowRoot.querySelector('slot')
    .assignedNodes(),
).filter('.activate-label.tag');

const boostedOfferCreationRole = Role(
  'https://rds-previews.wowmp.com.au/bug/ATMMPP-1838/storybook/iframe.html?id=widgets-smart-components-tiger-btl-offers--widget-tiger-btl-offers&viewMode=story',
  async t => {
    await t.click(boostButtonElement);
  },
  { preserveUrl: true },
);

//Tests
test('Loading Tiger BTL Offer component with the Booster cards', async t => {
  const btlSmartComponentExists = Selector('rds-widget-tiger-first-offers').exists;
  await t.expect(btlSmartComponentExists).ok();
});

test('Clicking on the Boost button to boost the offer and the button label should be changing to Ready to shop', async t => {
  await t
    .click(boostButtonElement)
    .expect(readyToShopButtonElement.exists)
    .ok();
});

test('Clicking on the carousel pagination through the widget to view the rest of the offer cards', async t => {
  await t
    .click(carouselPaginationElement.sibling(0))
    .expect(lastBoosterCardElement.exists)
    .ok();
});

test('Clicking on the Boost button to see ONLY the available offers that are ready to Boost', async t => {
  await t
    .useRole(boostedOfferCreationRole)
    .click(availableButtonElement)
    .expect(activatedOffersElement.exists)
    .notOk();
});
