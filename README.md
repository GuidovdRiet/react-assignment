# Consumersite-core opdracht

Deze opdracht is bedoeld om inzicht te geven in de Chainels Consumentenwebsites codebase, voornamelijk de `consumersite-core` repository.
In deze kleine repository vind je een geminimaliseerde setup van `consumersite-core`.

## Aan de slag

Run de development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

## Opdracht

Maak met React Hooks en Next.js een "news feed" die data ophaalt van de Chainels API, en zonodig meer bij kan laden met een `Load more` button.

## Verdere uitleg

Je kan in principe aan de gang in `pages/index.js`, wat de root page is in Next.js. Schrijf de body van de functie `getServerSideProps` die de `Home` component kan leveren van `data`. Voorzie de `Home` component daarna van de functionaliteit om op basis van user input meer data op te halen (een Read More button).

### Verschil in API

Deze repository maakt gebruik van de [nieuwste API](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) van Next.js om server side data te fetchen. Dit is een 'magic' method die automatisch data fetcht voor de Next.js Page component in dezelfde file. Zie het als een soort lifecycle method die server side plaatsvind. De consumersite-core repository maakt gebruik van een oudere manier om deze server-side lifecycle methods aan te roepen, maar het principe is hetzelfde. De structuur van de opdracht zal ook verschillen met de manier hoe consumersite-core is ingericht om op sectie basis data mee te geven.

### Chainels CMS

De data kan je ophalen van het `demo` CMS, waarbij de naam van dat CMS overeenkomt met het huidige thema in de `consumersite-core` repo (voor deze opdracht is dat in dit geval gewoon `demo`).
Dit zijn Wordpress CMS'en die gebruik maken van WP REST api, en gesynct zijn met de Chainels API door middel van custom Wordpress plugins, per thema.

https://veldhoven.chainelscms.com is bijvoorbeeld gescynhroniseerd met de Veldhoven community in Chainels.

De URL van een dergelijk CMS is daarom dus: https://[themanaam].chainelscms.com/wp-json/wp/v2/[data-type].

### Chainels data types

Je bouwt een news feed dus het data type wat je op kan halen is `news`. Andere data types die Chainels gebruikt en in de Consumentenwebsites verwerkt zijn zijn bijvoorbeeld:

- `company`
- `event`
- `promotion` (aanbiedingen van winkels, zoals 30% korting)
- `offer` (bijvoorbeeld lunch menus voor restaurants)

### ChainelsCMS parameters

Wat handige URL parameters om gebruik te maken van de Chainels CMS API:

| Parameter  | Uitleg                                                                                                                       | Voorbeeld waarde   |
| ---------- | :--------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| `lang`     | taal van het data type                                                                                                       | `en`, `nl`         |
| `page`     | huidige pagina, let op dat `0` niet valide is en als je een pagina meegeeft die niet bestaat krijg je een error als response | `2`                |
| `per_page` | aantal items per pagina                                                                                                      | `50` (max van 100) |
| `order_by` | sorteren                                                                                                                     | `asc`, `desc`      |

_HINT: het totaal aantal paginas kan je lezen uit de X-WP-TotalPages header die je terugkrijgt uit de initiele response_

Succes!

## Next.js

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
