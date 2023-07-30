CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

INSERT INTO cars(id, nome, img, "desc", preco, ano, km, "local") VALUES (
    uuid_generate_v4(),
    'CHEVROLET SPIN',
    'https://img.olx.com.br/images/72/728328510217370.jpg',
    '1.8 LTZ 8V FLEX 4P AUTOMÁTICO',
    '37.260',
    '2015/2014',
    112300,
    'São Paulo'
);

INSERT INTO cars(id, nome, img, "desc", preco, ano, km, "local") VALUES (
    uuid_generate_v4(),
    'KIA SORENTO',
    'https://upload.wikimedia.org/wikipedia/commons/b/b7/2017_Kia_Sorento_KX-4_4X4_Automatic_2%2C2_Front.jpg',
    '2.4 16V GASOLINA EX AUTOMÁTICO',
    '42.000',
    '2011/2011',
    115706,
    'Rio de Janeiro'
);

INSERT INTO cars(id, nome, img, "desc", preco, ano, km, "local") VALUES (
    uuid_generate_v4(),
    'VOLKSWAGEN GOL',
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Volkswagen_Gol_1.6_Power_2013_%2812489173025%29.jpg',
    '1.0 MI CITY 8V FLEX 2P MANUAL',
    '20.480',
    '2015/2014',
    44801,
    'São Paulo'
);

INSERT INTO cars(id, nome, img, "desc", preco, ano, km, "local") VALUES (
    uuid_generate_v4(),
    'AUDI A3',
    'https://quatrorodas.abril.com.br/wp-content/uploads/2020/04/audi-a3_sedan-2021-1600-03-e1587487453644.jpg',
    '2.0 TFSI SPORTBACK 16V GASOLINA 4P S-TRONIC',
    '41.000',
    '2010/2009',
    94527,
    'São Paulo'
);
