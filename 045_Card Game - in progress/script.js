const cardObjectDefinitions = [
    {id: 1, imagePath: 'images/card-KingHearts.png'},
    {id: 2, imagePath: 'images/card-JackClubs.png'},
    {id: 3, imagePath: 'images/card-QueenDiamonds-.png'},
    {id: 4, imagePath: 'images/card-AceSpades.png'}
];

const cardBackImgPath = '/images/card-back-blue.png';

const cardContainerElem = document.querySelector('.card-container');

function createCard(cardItem) {
    const cardElem = createElement('div');
    const cardInnerElem = createElement('div');
    const cardFrontElem = createElement('div');
    const cardBackElem = createElement('div');

    const cardFrontImg = createElement('img');
    const cardBackImg = createElement('img');

    addClassToElement(cardElem, 'card');
    addidToElement(cardElem, cardItem.id);

    addClassToElement(cardInnerElem, 'card-inner');
    addClassToElement(cardFrontElem, 'card-front');
    addClassToElement(cardBackElem, 'card-back');

    addSrcToImageElem(cardBackElem, cardBackImgPath);

    addSrcToImageElem(cardFrontImg, cardItem.imagePath);

    addClassToElement(cardBackElem, 'card-img');
    addClassToElement(cardFrontImg, 'card-img');

    addChildElement(cardFrontElem, cardFrontImg);
    addChildElement(cardBackElem, cardBackImg);
    addChildElement(cardInnerElem, cardFrontElem);
    addChildElement(cardInnerElem, cardBackElem);

    addChildElement(cardElem, cardInnerElem);


}

function createElement(elemType) {
    return document.createElement(elemType);
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addidToElement(elem, id) {
    elem.id = id;
}

function addSrcToImageElem(imgElem, src) {
    imgElem.src = src;
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem);
}

function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card);
    const cardPosElem = document.querySelector(cardPositionClassName);

    addChildElement(cardPosElem, card);
}

function mapCardIdToGridCell() {
    if (card.id == 1) {
        return '.card-pos-a';
    } else if (card.id == 2) {
        return '.card-pos-b';
    } else if (card.id == 3) {
        return '.card-pos-c';
    } else if (card.id == 4) {
        return '.card-pos-d';
    }
}