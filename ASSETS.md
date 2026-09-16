# Guide : logos, liens & vérification de propriété

## 1. Où déposer les logos des projets

Dossier : **`public/images/products/`**

| Projet         | Nom de fichier exact          | Format                              |
| -------------- | ----------------------------- | ----------------------------------- |
| iDishYou       | `idishyou.png`                | PNG, fond transparent, **800 × 400 px** |
| Ravium         | `ravium.png`                  | PNG, fond transparent, **800 × 400 px** |
| SyndicHubs     | `syndichubs.png`              | PNG, fond transparent, **800 × 400 px** |
| SkoolHubs      | `skoolhubs.png`               | PNG, fond transparent, **800 × 400 px** |
| ShowYourCause  | `showyourcause.png`           | PNG, fond transparent, **800 × 400 px** |

Règles :
- **PNG avec fond transparent** (sinon on verra un rectangle blanc sur la carte).
- Ratio conseillé **2:1** (800 × 400 px). Un logo carré ou vertical fonctionne
  aussi : il est automatiquement centré et redimensionné sans déformation.
- Poids : **moins de 300 Ko** par logo.
- Le logo est affiché sur environ 220 × 80 px → le 800 × 400 px garantit la
  netteté sur écrans Retina.
- Si un fichier est absent ou mal nommé, **le nom du produit s'affiche à la
  place** : rien ne casse, le site reste en ligne.

### Image de fond (facultatif)
Un visuel d'ambiance / screenshot derrière le logo :
- Nom : `<projet>-cover.jpg` (ex. `ravium-cover.jpg`)
- Format : JPG ou WEBP, **1200 × 675 px** (16:9), moins de 400 Ko
- À déclarer dans `src/data/products.ts` avec le champ `cover`.

## 2. Où mettre les liens des projets

Fichier : **`src/data/products.ts`**

Un seul champ à remplir, `url` :

```ts
{
  id: "ravium",
  name: "Ravium",
  url: "https://ravium.com",   // <-- décommenter / remplir quand le site est en ligne
  logo: "/images/products/ravium.png",
  ...
}
```

Règle automatique :
- `url` **rempli** → badge vert **« Live »** + carte cliquable (ouvre le site
  dans un nouvel onglet) + le domaine s'affiche en bas de la carte.
- `url` **absent ou commenté** → badge ambre **« In Progress »**, carte non
  cliquable.

Pour forcer un statut (ex. site en ligne mais encore en chantier) :
```ts
status: "building",   // ou "live"
```

## 3. Vérification de propriété Google (Search Console)

Le fichier **`public/googlec6a93e09f033e5be.html`** est déjà en place.

Une fois le site déployé sur Vercel, il sera accessible ici :
`https://madforbusiness.com/googlec6a93e09f033e5be.html`

→ retourner dans Google Search Console et cliquer sur **« Vérifier »**.

⚠️ Ne pas supprimer ce fichier : Google revalide la propriété périodiquement.

Pour un autre service (Bing, Yandex, Facebook…), même principe : déposer le
fichier fourni à la racine de `public/`. Si le service donne une **balise meta**
au lieu d'un fichier, elle s'ajoute dans `src/app/layout.tsx` :

```ts
export const metadata: Metadata = {
  verification: {
    google: "LE_TOKEN_FOURNI",
    other: { "facebook-domain-verification": "LE_TOKEN" },
  },
};
```
