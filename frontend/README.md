# Web 2 - Lab 5

## Postavljanje aplikacije

Package manager jer pnpm, sa npm-om se može pokrenuti tako da se izbriše pnpm-lock.yaml pa nakon toga klasične naredbe za npm (install, run dev, build).

```sh
pnpm install
```

### Pokretanje za development

```sh
pnpm dev
```

### Buildanje za deploy

```sh
pnpm build
```

## Aplikacija treba imati:

- interpolation/one-way binding

++ src/components/forms/UsersForm.vue - watch funkcija se poziva kada se username mijenja, no ona ne mijenja sam view (therefore, one-way binding)

- two-way binding

++ src/components/forms/UsersForm.vue - v-model na username refu, odnosno na inputu forme, kako se jedno mijenja, mijenja se i drugo

- methods

++ src/components/forms/UsersForm.vue - metode handleSubmit i resetForm

++ src/views/UsersView.vue - metoda handleEditUser

- computed properties

++ src/stores/authStore.js - getUserAuthStatus je computed

- barem jedan scoped style

++ src/components/Navbar.vue

- koristiti barem jedan lifecycle hook

++ src/App.vue - kada se mounta, provjerava se postoji li stari login spremljen u localStorage-u

++ src/views/UsersView.vue - kada se mounta, fetchaju se useri

- routing (više stranica)
  - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2)

++ src/router/index.js - navedene rute

 - dinamičko usmjeravanje s 404 stranicom ("catch all")

++ src/router/index.js - catchAll

- (barem) dvije komponente
  - komponenta bez stanja, koristiti properties
  - komponenta sa stanjem

++ src/components/forms/UsersTable.vue - komponenta je stateless jer podatke samo prima iz usersStore te emitira događaje za roditelj komponentu

++ src/components/views/UsersView.vue - komponenta ima state (koristi ref, onMounted te funkciju kojom mijenja ref stanje)

- barem jedna komponenta mora emitirati barem jedan event

++ src/components/forms/UsersTable.vue - emitira "edit-user" event koji UsersView "hvata"

- store (Pinia)

++ src/stores/authStore.js - definiranje

++ src/components/Navbar.vue - korištenje

- asinkroni dohvat podataka s backenda, možete:
  - koristiti Firebase ili Back4App, Mocky, itd.
  - vlastiti storage, ili
  - možete mock napraviti, držati podatke u memoriji, ali mora biti asinkroni poziv/upis

++ izrađemo pomoću mocky-a, dohvat u src/stores/usersStore.js

![image](https://github.com/user-attachments/assets/ed967da4-8ad3-4e9c-9781-317166794ba8)


- ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente)

++ src/views/UsersView.vue - asinkrono učitavanje UsersTable
