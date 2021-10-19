CREATE SCHEMA IF NOT EXISTS popular_flowers;
USE popular-flowers;

CREATE TABLE flowers(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO flowers(name, description, image)
VALUES
("Rose", "No doubt that roses are amongst the most popular flowers. They are available in different colours. A red rose flower is most commonly used to denote love and romance.", "rose"),
("Tulip", "Tulips are large and distinctive flowers that are initially cultivated by the Turks. Tulip flower is considered as the symbol of the Ottoman Empire by Europeans.", "tulip"),
("Sunflower", "Sunflower is popular as it is easy to grow and also used for human consumption on a considerable level. It symbolizes loyalty as it always keeps its face towards the Sun.", "sunflower"),
("Daffodil", "A representative of regard and respect, Daffodils are native to Asia, North America, and Europe. And there are about more than a hundred species of Daffodils.", "daffodils"),
("Marigold", "Marigold is famous for its thick and lush foliage, and its beauty make and name led it amongst our list of most popular flowers. Marigold also has spiritual significance!", "marigold"),
("Daisy", "Daisy is easily found around the planet, and people also call it the cousin of the sunflower. Their beauty makes them a favourite pick as a home garden flower.", "daisy"),
("Orchid", "The flower orchid belongs to a huge family of flowers and has blooms which are colourful and fragrant. These flowers are known to symbolize large families, particularly families with many children.", "orchids"),
("Carnations", "Carnations are the most popular flowers and also the most commonly used flower for the bouquets. And they are most used for Mother's Day celebrations!",  "carnations"),
("Gerberas", "Gerbera generates its beauty from a wide capitulum with outstanding two-lipped ray florets. It symbolizes innocence and purity.", "gerberas"),
("Jasmine", "Apart from being one of the most popular flowers, Jasmine is a national flower of Indonesia. The scent of jasmine is highly used in deodorants and soaps around the world.", "jasmine");