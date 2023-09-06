# Verr Med

A web app to identify the presence of allergens in pharmaceutical drugs

[Acesse aqui!](verr-med.netlify.app)


## Features

- Search medicine by name
- Results are designed to be intuitive, indicating wether the drug contains or not the allergens input on the search
- Mobile responsiveness
- Baixar bula


## License

[MIT](https://choosealicense.com/licenses/mit/)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## Documentation

### What and who is Verr Med for?
Verr Med was developed for people who struggle with drug allergies, with the end goal to ease their worries when buying medication and/or receiving treatment. Through the app, the user can type in the name of the drug they intend to take, add their allergies and make the search. The results will show all the matches to the name typed and will indicate wether each medication contains or not the allergens they input on the search field.

**IMPORTANT!**
Verr Med is *destinated only for informative purposes and does not encourage self medication.* We make the effort to keep the information provided simple and safe for the users, and *we do not take responsibility for any damage that might come from the misuse of the app*.


### Tech Stack
**Client**: HTML5, CSS, Javascript, ES6, ReactJS <br>
API used to automate search: [Bulario API - documentation](https://bula.vercel.app/docs) | [Bulario API - GH](https://github.com/iuryLandin/bulario-api)


### How does it work?
1. The user types in the name of the drug they intend to take
    (the name typed must be an exact match OR a piece of the original name)
3. The user selects at least one allergen on the search field
    (not selecting prevents the user from searching and returns an error message)
5. The user hits the search button and if all the fields are filled the search is started.
6. Some HTTP requests are made to the API in order to get the info needed for the results: name of the product, name of the pharmaceutic company, drug presentation form, the active substances and the package insert/leaflet.
7. If there are no matches to the name inserted on the search field, the result returns an error message to the user on the screen. Otherwise, it returns a card for each product found in the search, with their corresponding information. Each card provides information on wether the product contains or not the allergens input on the search field. A red-labelled card indicates the product contains the allergens; a green-labelled card indicates that it does not contain any of the allergens; and a yellow-labelled card indicates that it was not possible to retrieve this information from the database, therefore it cannot indicate wether this specific product contains or not the allergens.
8. **Only products administrated orally or topically (on the skin) are shown in the results**


### SCREENSHOTS

|                |                | 
| ---------------|----------------|
| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/e37b9371-6291-43e6-ab17-e05bd6717c9c)| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/7ae51960-75a7-4a14-bdba-bab7e7eaefd2)| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/ffc1d748-aa23-4fd0-b710-2609ba498171)| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/6c6a4364-df3c-4d91-909b-72d74d60e4cf)|
| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/ad2d3498-c209-44e8-b711-ca8a4f7ff393)| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/f7be65a8-0d04-4808-9de1-a9d1865aa2fe)|
| ![](https://github.com/mclaramarinho/verrmed/assets/119897667/864db2d3-e7ef-4b3d-9da8-d84163a614f2)| ![]()|


## Authors

- [@mclaramarinho](https://www.github.com/mclaramarinho)
