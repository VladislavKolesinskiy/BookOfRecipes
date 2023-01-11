

function checkLocalStorage () {
    if(localStorage.getItem('data11-eng')){
        return 
    }

    else {
        let recipes = [
            {
                title: 'Borsht',
                image: '../img/r/borsht.jpeg',
                ingredients: '<ul><li>1,5–2 liters of water</li><li>400–500 g pork or beef on the bone</li><li> 2 small beets</li><li>1 medium carrot</li><li>3 medium bulbs</li><li>4–5 tablespoons of vegetable oil</li><li>A pinch of citric acid, a little table vinegar or 0.5 lemon</li><li>2 tablespoons of tomato paste</li>   <li>300 g fresh white cabbage</li><li>4 medium potatoes</li><li>Salt - to taste</li><li>1–2 dried bay leaves</li><li>Greens - to tasty </li><li>1  garlic clove - optional</li></ul>',
                cooking: '<p>1.   Pour cold water into the pan, put the meat and put on medium heat. The broth will be tastier if you use meat on the bone. Keep an eye on the broth, remove the foam before boiling. When the liquid boils, cover the pan with a lid and cook over low heat for an hour and a half</p><p>2.   Wash and clean beets, carrots and onions. Grate the beets on a coarse grater, and carrots on a medium grater. Onion cut into small cubes. Pour oil into a frying pan, turn on medium heat. Saute the onions and carrots, stirring occasionally, for about 5 minutes. Then lay out the beets. Add citric acid, vinegar or lemon juice to it. Thanks to this, the borscht will be truly red and acquire a pleasant sourness. Cook roast for another 5 minutes. After that, add tomato paste, mix and leave on fire for another 5-7 minutes</p><p>3.   When the broth is cooked, remove the meat from it. While it is cooling, add shredded cabbage to the pan. After 5-10 minutes, add the potatoes cut into strips or cubes. The order of adding vegetables can be changed. If the cabbage is young, it is better to add it after the potatoes. Well, or at the same time, if your potato variety boils quickly. While the potatoes are cooking, remove the meat from the bone and cut into cubes. Put it back in the soup. Salt to taste. Add roast and stir. Cover the pot with a lid and cook for another 5-7 minutes.</p>',
                category: ''
            },
        
            {
                title: 'Burger',
                image: '../img/r/burger.jpeg',
                ingredients: '<ul><li>1 kg beef pulp</li><li>250 g beef fat or lard</li><li>1 large onion</li><li> salt, freshly ground black pepper</li><li> butter</li><li>6 burger buns</li><li>4 pickled cucumbers</li><li> 1 large tomato</li><li>1 red sweet onion</li><li>lettuce or romaine lettuce leaves</li><li>ketchup, mustard, mayonnaise</li></ul>',
                cooking: '<p>1.   Prepare minced meat for classic American burgers. Peel and very finely chop the onion. Melt the butter in a frying pan, put the onion and simmer over low heat for 5-7 minutes. Cool down</p><p>2.   Cut off all the films from the beef pulp. Turn the meat through a meat grinder with a large grate. Then check the fat. Add onion to meat and fat, salt, pepper and mix thoroughly</p><p>3.   Divide the burger mince into 6 equal portions and form into 6 2.5 cm thick patties with wet hands. Place on a parchment-lined tray and refrigerate for 30 minutes</p><p>4.   To serve classic American burgers, cut the onion into thin rings, the tomato and cucumbers into thin circles. Cut the buns in half and brush the cut with butter. Put all the right ingredients on the table</p><p>5.   Kindle the coals in the brazier or barbecue - they should burn well and be covered with gray ash. Heat the grate, grease. Add burgers and cook, turning every 2 minutes, until desired doneness. Then fry the buns on the coals from the cut side - literally for 10 seconds, otherwise they will burn!</p>',
                category: ''
            },
        
            {
                title: 'Pasta Carbonara',
                image: '../img/r/carbonara.jpg',
                ingredients: '<ul><li>Spaghetti 500g</li><li>Bacon 150g</li><li>Egg yolk 4 pcs.</li><li>Ground black pepper 1 tbsp.</li><li>Parmesan cheese grated 100g</li><li>Olive oil 2 tbsp</li><li>Salt 2 pinches</li><li>Garlic 2 tooth</li></ul>',
                cooking: '<p>1. Cook spaghetti until al dente (about 9 minutes)</p><p>2. Saute finely chopped garlic, onion and bacon in olive oil</p><p>3.  In a deep bowl, rub the cheese, add 5 tablespoons of boiling water from the pan in which the pasta is boiled, and rub with a spoon</p><p>4.  To the resulting cheese "gruel" add 4 yolks, onion, garlic, bacon and mix vigorously</p><p>5.  Drain spaghetti in a colander, mix with cheese and egg sauce, add salt and pepper if necessary</p><p>6.  The dish is immediately served on the table in pre-warmed plates.</p>',
                category: ''
            },
        
            {
                title: 'Chicken with rice',
                image: '../img/r/chickenrice.jpg',
                ingredients: '<ul><li>Chicken 1 kg</li><li>Carrot 150 g</li><li>Onion 100 g</li><li>Sunflower oil 50 ml</li><li>Rice Basmati 280 g</li><li>Garlic 5 g</li><li>Salt to taste</li><li>Ground black pepper to taste</li><li>Ground turmeric 1 tsp	</li><li>Ground paprika 1 tsp</li><li>Water 650 ml</li></ul>',
                cooking: '<p>1. Wash the chicken carcass, dry it and cut into portioned pieces</p><p>2. Peel carrots, cut into strips</p><p>3. Peel onion, cut into half rings</p><p>4. In refined sunflower oil, fry onions and carrots for 5 minutes over medium heat</p><p>5. Wash the rice, drain the water. Put the rice in a baking dish. You can use any other long grain rice instead of basmati.</p><p>6. We spread the fried onions and carrots on the rice along with the oil in which the vegetables were fried</p><p>7. Here we add a clove of garlic, passed through a press</p><p>8. Add salt and ground black pepper</p><p>9. Mix rice, onions, carrots and spices</p><p>10. Put chicken pieces lightly rubbed with salt on a rice and vegetable pillow.</p><p>11. Pour boiling water over the chicken and rice so that it only covers the chicken pieces</p><p>12. We cover the form with rice and chicken with foil and pinch the edges tightly</p><p>13. Bake chicken with rice in a preheated oven at 180 degrees for about 1 hour</p><p>14. Chicken with rice baked in the oven is ready</p>',
                category: ''
            },
        
            {
                title: 'Potato chips',
                image: '../img/r/crisps.jpg',
                ingredients: '<ul><li>кpotato 300 g </li><li>salt - a pinch</li><li>sweet ground paprika - to taste</li>    <li>vegetable oil - 2 tbsp. l.</li></ul>',
                cooking: '<p>1. Peel, wash and cut the potatoes into very thin slices (circles) about 2 mm thick. Put the sliced ​​potatoes in a bowl and pour cold water for 2-3 minutes. This is necessary in order to wash out excess starch. Drain the water, and put the potatoes on a waffle towel, dry</p><p>2. Put potato slices in a bowl, add salt, sweet ground paprika and vegetable oil, mix well. Seasonings in this dish can be used according to your taste.</p><p>3. Line a baking sheet with parchment paper. Lay out the potatoes in one layer. Cover with a second sheet of parchment paper so that the chips do not burn during baking. Bake potato chips in an oven preheated to 180 degrees for 20-25 minutes (until golden brown). Cooked chips may be a little soft, but when they cool they become crispy. Cooking time will depend on your oven and on the thickness of the slices.</p>       <p>4. Potato chips cooked in the oven, cool, put in a bowl and can be served. Appetizing, crispy chips are delicious served with ketchup</p>',
                category: ''
            },

            {
                title: 'Croissants',
                image: '../img/r/croissant.jpg',
                ingredients: '<ul><li>Wheat flour 450g</li><li>Sugar 60g</li><li>Chicken egg 2 pcs</li><li>Dry yeast 8 g</li><li>Butter 180 g</li><li>Sunflower oil 20 ml</li><li>Rock salt 5 g</li></ul>',
                cooking: '<p>1. Dilute yeast in 150 ml of warm water, let stand for 10 minutes, then mix</p><p>2. Sift flour, pour into a deep bowl. Knead 30 g of butter with your hands and grind with flour. Add 1 egg, sugar, 0.5 teaspoons of salt, yeast and knead into a smooth elastic dough (knead 10-15 minutes)</p>     <p>3. Sprinkle the table with flour, roll out the dough into a rectangle measuring 50 × 20 cm. Knead the remaining butter, divide into 3 parts. Spread 1/3 of the butter on 2/3 of the surface of the dough using the back of a tablespoon, stepping back from the edges of the dough 2-3 cm (the butter should not completely melt, but consist of small lumps)</p><p>4. Wrap the unlubricated surface over half of the lubricated surface and cover with the remaining lubricated surface. You will get a three-layer rectangle measuring approximately 17 × 20 cm. It is good to close the edges of the dough with your hands so that the oil does not come out when the dough is further rolled out</p><p>5. Turn the dough 90 degrees to the right and roll it out again into a 50x20 cm rectangle. Carefully transfer the dough onto a sheet of parchment (or tracing paper), cover with a second sheet, fold in half, cover with a towel and put in the refrigerator for 30 minutes. After the specified time has elapsed, transfer the dough to a floured table<p><p>6. Completely repeat the previous procedure 2 more times. Repeat the previous procedure 3 more times, but without oil. Put the dough in the refrigerator only after the third repetition</p><p>7. Roll out the dough into a rectangle measuring 52×30 cm, cover with a towel and leave for 10 minutes. Then cut the dough in half lengthwise, cut each layer into 8 triangles with a base of 13 cm</p><p>8. Roll croissants out of triangles, put tip down on a baking sheet greased with vegetable oil, giving them the shape of a crescent. Distance between croissants at least 5 cm</p><p>9. Lubricate the croissants with an egg and leave for 40 minutes to rise (preferably in a cupboard or a cold oven so that there are no air currents, otherwise the croissants will dry out)</p><p>10. Preheat oven to 220 degrees. Bake croissants for 15-20 minutes</p>',
                category: ''
            },
        
            {
                title: 'Donuts',
                image: '../img/r/donut.jpg',
                ingredients: '<ul><li>sugar 50g</li><li>dry yeast 7 pinches</li><li>water 50 ml</li><li>milk 70 ml</li>     <li>salt 5 pinches</li><li>egg 1 pc</li><li>flour 250 g</li><li>butter 15g</li><li>powdered sugar 50g</li><li>frosting to taste</li><li>confectionery topping to taste</li></ul>',
                cooking: '<p>1. Combine sugar, yeast</p><p>2. add warm water, milk, salt</p><p>3. stir until ingredients are dissolved</p><p>4. Add egg, mix</p><p>5. Add sifted flour, knead well</p><p>6. Add butter at room temperature, knead the dough again so that it sticks well from your hands.</p><p>7. Cover and leave the dough in a warm place for 30 minutes</p><p>8. The dough should double in size</p><p>9. Sprinkle the dough with powdered sugar and knead well again. The dough will become a little soft and stick to your hands, but try to knead it as best as possible. Cover the dough and send it to a warm place for 30 minutes. Get it out, knead it well with your hands again and send it to a warm place for another 30 minutes</p><p>10. Place the dough on a floured work surface and roll out thinly with a rolling pin</p><p>11. Squeeze out a small circle in the middle of the donut, cover with a towel and let stand in a warm place until they slightly increase in volume</p><p>12. Heat the vegetable oil well and fry the donuts until golden brown on both sides. The main thing is to make sure that the donuts do not burn, as they cook very quickly!</p><p>13. Put donuts on a paper towel and let cool</p><p>14. Sprinkle donuts well with powdered sugar or dip each donut in ready-made confectionery glaze</p>',
                category: ''
            },
        
            {
                title: 'Fish and Chips',
                image: '../img/r/fishchips.jpeg',
                ingredients: '<ul><li>4 cod fillets, 150 g each</li><li>4 non-friable potatoes</li><li>200 g flour</li><li>1 tsp. yeast</li><li>0.5 tsp baking soda</li><li>1 lemon</li><li>200 ml cold water</li><li>Peanut butter</li><li>Salt, pepper</li></ul>',
                cooking: '<p>1. sift the flour together with yeast and soda, add a pinch of salt and pepper to the sifted flour</p><p>2. Slowly pour very cold water into the flour container until the batter looks like liquid sour cream. (There is another option when yeast is not added, but water with gas or beer is used instead of ordinary water - it also gives a good result), stirring all the time with a whisk until a homogeneous mass is obtained. Cover the container with foil and leave to "rest" for 30 minutes</p><p>3. Peel the potatoes, wash, dry and cut into strips. (The thinner the straw, the faster it will fry). Rinse the potato strips under running water and pat dry with a kitchen towel. (If you wash off the starch, the potatoes will be crispy and the straws will not stick together)</p><p>4. Heat the peanut butter in a frying pan. Fry the potato strips for 4-5 minutes over medium heat until browned. (NO lid, otherwise it wont be crispy). Remove from the pan with a slotted spoon and transfer to an oven preheated to 150 °. When we fry in a large amount of fat, the products that we immerse in fat should be spacious, they should not stick to each other, so it is important to use large dishes</p><p>5. Go to fish. Remove the film from the container, mix the batter well. Immerse completely dry fillet in batter while oil is heated</p><p>6. Heat the peanut butter in another large skillet. You can check the readiness of the oil for deep-frying as follows: lower the tip of a wooden stick into the pan; if the stick starts to attract bubbles, the oil is ready to fry. Remove the fillet from the batter and fry for 3-4 minutes</p><p>7. Remove the fish with a slotted spoon, transfer to kitchen paper so that it absorbs excess fat and serve with potatoes and lemon slices</p>',
                category: ''
            },
        
            {
                title: 'French toast',
                image: '../img/r/frenchtoast.jpg',
                ingredients: '<ul><li>Bread for toast 6 slices</li><li>Milk 70ml</i><li>Chicken egg 3 pcs</li><li>Pinch of salt</li><li>Sugar 3 tbsp</li><li>Butter 60g</li><li>Honey to taste</li><li>Fresh berries 110g</li></ul>',
                cooking: '<p>1. Cut the bread into triangles</p><p>2. Beat eggs with milk, sugar and salt</p><p>3. Heat the pan and melt the butter</p><p>4. Dip the bread on both sides in the mixture and send to the pan</p><p>5. Fry for one and a half minutes on each side (consider the features of your stove)</p><p>6. Preheat the oven to 180 degrees and send the toasts to bake in the oven until crust</p><p>7. Garnish with berries, drizzle with honey or syrup</p>',
                category: ''
            },
        
            {
                title: 'French fries',
                image: '../img/r/fries.jpg',
                ingredients: '<ul><li>1 kg potatoes for frying</li><li>vegetable oil for deep frying</li><li>medium sea salt</li><li>good ketchup to serve</li></ul>',
                cooking: '<p>1. Peel the potatoes. Cut off the rounded parts on all sides so that you get a rectangular bar. Cut it lengthwise into 1 cm thick plates, each plate into 1 cm thick sticks</p><p>2. Rinse the sliced ​​potatoes in cold water and put in a pot of salted boiling water (there should be plenty of water so that the potatoes lie freely in it). Bring water to a boil over medium heat. Reduce heat to low and simmer potatoes for 2 minutes. Throw it in a colander and let it dry and cool, 20-30 minutes. All this is necessary in order to get rid of excess starch</p><p>3.Spread the cooled potatoes on a tray and put in the freezer for 20–30 minutes. This is necessary so that a crispy crust immediately forms on the potatoes during frying.</p><p>4. While the potatoes are in the freezer, prepare a deep, wide pot (or skillet, or wok) with a thick bottom for deep-frying. Pour oil into it - you should get a layer with a depth of at least 8-10 cm. The more oil, the larger portions of potatoes you can lay, leave the pan on medium-high heat and heat the oil to 190 ° C. If you dont have a thermometer, keep a few cubes of white bread with a side of 1 cm ready. If a cube thrown into hot oil fries until golden brown in 30 seconds, then the butter is ready</p><p>5. In portions, carefully, with a slotted spoon, spread the frozen potatoes in oil and fry until a beautiful golden crust on all sides, about 1 min. To keep cooked potatoes warm, lay them out for 1 minute first. on paper towels to drain excess fat, and then on a dish or baking sheet, standing in an oven preheated to 80-100 ° C</p>',
                category: ''
            },
        
            {
                title: 'Hot chocolate',
                image: '../img/r/hotchoco.jpg',
                ingredients: '<ul><li>Milk 250 ml</li><li>Nutella 3 teaspoons</li><li>Cream 33% 50 ml</li><li>Powdered sugar 1 teaspoon</li><li> Milk chocolate 1 piece</li><li>Marshmallow to taste</li></ul>',
                cooking: '<p>1.Heat milk without boiling</p><p>2. Add Nutella and mix well with a whisk</p><p>3. Whip cream with icing sugar until thick, carefully place on top</p><p>4. Sprinkle with grated chocolate, decorate marshmallow</p>',
                category: ''
            },
        
            {
                title: 'Khinkali',
                image: '../img/r/khinkali.jpg',
                ingredients: '<ul><li>Wheat flour 500g</li><li>Water 300ml</li><li>Salt 1.5 tsp</li><li>Veal 250g</li><li>Beef 250g</li> <li>Salo 100g</li><li>Onion 100g</li><li>Garlic 2 cloves</li><li>Ground cumin (zira) to taste</li><li>Red chili pepper to taste to taste</li><li>Cilantro to taste</li></ul>',
                cooking: '<p>1.Meat, peeled from veins, is turned into minced meat - the brisket or the back of a young individual. Then lard, finely chopped onion and garlic are added. At the end, water intervenes - as much as the minced meat can absorb without separating into meat and water fractions. For a pound of meat - about 150 ml. To taste, you can add salt, cumin, hot pepper (you can cook it yourself) and cilantro</p><p>2. Knead the dough from flour, salt and 150 ml of water - quite dense and tight. It will be difficult to knead and roll it out by hand - so if you have a dough mixer and especially a dough sheeter, they will make the process very easy. The dough can be stored in a cool place for no more than an hour, then it begins to rapidly lose its noble qualities.</p><p>3. The success of future khinkali depends on the number of layers in the dough: ideally, there should be about twenty. To do this, roll out the dough with a rolling pin into a centimeter layer and cut it into 4 × 4 cm squares. Each piece must be rolled out and folded, sprinkled with flour every other time, again and again - at least 10 times. The result should be puff sheets 3 mm thick</p><p>4. Minced meat is prepared in advance, because as soon as the sheets of dough are ready, you need to wrap the meat in them immediately so that the dough does not dry out. In the middle of each sheet put a small ladle of minced meat, about 40 grams. If the mixed water managed to appear on the minced meat, before spreading it on the dough, it must be thoroughly mixed again until smooth</p><p>5. The edges of the sheet are folded with an accordion as tightly as possible. There are nineteen folds in the ideal khinkali. Take the fastened bag in one hand, and twist the other in the same direction that the folds were made, and tear off the excess dough - the khinkali will get a dense stump on top. Put the khinkali on the board so that it has a flat bottom, which will then be convenient to bite into</p><p>6. With a spatula, spin rapidly boiling water in a spacious saucepan, salt, throw in a dozen khinkali and again make a whirlpool in the saucepan. The point is that the khinkali do not shrink and do not stick to each other or to the bottom. Cook until the khinkali float upside down. Plus another two or three minutes - about ten minutes in total. Take it out carefully - with a slotted spoon</p><p>7. The catch is laid out on a dish. As a rule, the amount is boiled in multiples of ten, each subsequent portion is prepared anew. The final gesture before the start of the meal is sprinkling the still moist, steaming khinkali with freshly ground black pepper, which immediately releases the right spirit from them. Start eating immediately</p>',
                category: ''
            },
        
            {
                title: 'Lasagna',
                image: '../img/r/lasagna.jpg',
                ingredients: '<ul><li>2 tablespoons olive oil</li><li>1 onion</li><li>500 g ground beef</li><li>salt to taste</li><li>ground black pepper - to taste</li><li>500 g of passata or fresh tomatoes without skins, cut into small cubes</li><li>1 teaspoon of dried basil</li><li>40 g of butter + a little for greasing</li><li>40 g flour</li><li>400 ml milk</li><li>salt to taste</li><li>ground black pepper to taste</li><li>ground nutmeg, to taste</li><li>250g lasagne sheets</li><li>50g Parmesan</li></ul>',
                cooking: '<p>1. Heat the oil in a frying pan and sauté the finely chopped onion until golden brown. Put the minced meat and fry, stirring, until the meat is ready. Season with salt and pepper</p><p>2. Add the passata or tomatoes, stir and simmer for about 10 minutes. Then combine the mass with basil</p><p>3. Melt the butter in a saucepan over moderate heat. While stirring with a whisk, add flour. Whisking continuously, gradually pour in the milk. Boil the bechamel sauce, stirring constantly, until it thickens. Season with salt, pepper and nutmeg</p><p>4. Grease a baking dish with oil. Place a few sheets of lasagna on the bottom and cover them with some of the sauce. Spread some of the meat filling on top. Repeat layers. Top with béchamel sauce sprinkled with grated parmesan. Bake for 30 minutes at 190 °C</p>',
                category: ''
            },
        
            {
                title: 'Pizza Margherita',
                image: '../img/r/margarita.jpg',
                ingredients: '<ul><li>Wheat flour 1.5 cups</li><li>Dry yeast 1 tsp</li><li>Sugar 1 tsp</li><li>Water 0.5 cups</li><li>Salt 0.5 tsp</li><li>Olive oil 4 tbsp</li><li>Tomato paste 3 tbsp</li><li>Olive oil 2 tbsp</li><li>Garlic 1 head</li><li>Salt to taste</li><li>Basil 6l</li><li>Mozzarella 200g</li><li>Cherry tomatoes 8pcs</li></ul>',
                cooking: '<p>1. Start making pizza with the dough. Heat the water to a temperature of 37-40 degrees. Dissolve sugar in it and add yeast. If you do not have a cooking thermometer, determine the temperature in the following way: put a drop of water on the inside of your wrist. If the sensation is neutral, then the temperature is correct. Leave in a warm place for 5-15 minutes to activate the yeast</p><p>2. Add salt, 2 tablespoons of olive oil to the dough and mix well until smooth.</p><p>3. The properties of flour of the same variety, but different manufacturers may differ. Therefore, to get the desired consistency, add flour in small portions. When it becomes difficult to knead with a spoon, start doing it with your hands. Knead the dough thoroughly</p><p>4. The dough should be soft, tender and slightly sticky to your hands. Lubricate the bowl and hands with vegetable oil. Form a ball from the dough, cover the bowl with cling film or a towel so that it does not dry out and rises well. Leave in a warm place while you prepare the filling.</p><p>5. Start preparing the filling. Dried basil can be substituted for fresh basil. Tomatoes choose a small size, dense and fleshy so that they do not spread and retain their shape during baking</p><p>6. Peel and wash the garlic, cut along the clove into 2 parts. Heat oil in a hot frying pan. Sauté the garlic over medium heat for 2 minutes, stirring</p><p>7. Add tomato paste to garlic. If the paste is too thick, add some water so that you can get a smooth paste. Bring to a boil, stirring constantly, season with salt to taste. Simmer for another 2 minutes<p><p>8. Remove sluggish leaves and hard stems from basil, rinse, dry and chop with a knife. Add to skillet and stir. The sauce is ready</p><p>9. Transfer it to a small container and let it cool. Remove the garlic, you will no longer need it</p><p>10. Cut the mozzarella into pieces 3-5 mm thick. Some can, like me, grate</p><p>11. Wash the tomatoes, remove the stalk and cut into circles or just in half</p><p>12. When the sauce has cooled, proceed to the formation of pizza. Turn on the oven to heat up to 220 degrees so that it has time to warm up</p><p>13. Knead the dough with your hands into a round layer 3-5 mm thick. Leave the edges thicker to form a side</p><p>14. Brush the dough evenly with the sauce</p><p>15. Top with mozzarella</p><p>16. Next, arrange the tomatoes</p><p>17. Bake for 10-15 minutes on the middle shelf of an oven preheated to 220 degrees in the "top-bottom" mode. Determine the exact time and temperature according to your oven. In the finished pizza, the edges of the dough will lightly brown. For a perfect Margherita pizza, the Mozzarella pieces should only be slightly melted</p>',
                category: ''
            },
        
            {
                title: 'Milkshake',
                image: '../img/r/milkshake.jpg',
                ingredients: '<ul><li>Milk 3.2% 350ml</li><li>Ice cream 60g</li><li>Dark chocolate 100g</li><li>Whipped cream to taste</li><li>Chocolate chips to taste </li></ul>',
                cooking: '<p>1. Prepare chocolate topping. Pour half of the total volume of milk into the container. Break the chocolate bar into small pieces and add to the milk. Put the container on a slow fire and heat until the chocolate and milk turn into a homogeneous mass, then cool. To save time, you can melt the chocolate in the microwave</p><p>2. Connect products. Put the ice cream, melted milk with chocolate and the remaining milk into the blender bowl. Beat until smooth airy mass at high speed for about 4-5 minutes</p><p>3. Pour the finished drink into tall transparent glasses. Insert cocktail tube. Top with whipped cream and chocolate chips</p>',
                category: ''
            },
        
            {
                title: 'Pilaf',
                image: '../img/r/pilaf.jpg',
                ingredients: '<ul><li>Carrot 2pcs</li><li>Pork 500g</li><li>Onion 2pcs</li><li>Rice 2 cups</li><li>Vegetable oil 50ml</li><li >Salt to taste</li><li>Pilaf spices to taste</li><li>Garlic 1 head</li></ul>',
                cooking: '<p>1. Wash the meat, dry it, cut into pieces</p><p>2. Peel, wash and cut onions into thin half rings</p><p>3. Peel, wash and cut the carrots</p><p>4. Make zirvak (this is the basis of pilaf, namely meat, carrots, onions and spices). To do this, heat the cauldron. Pour vegetable oil. Roast it well. Lay out the prepared onion. Fry until golden brown about 5-7 minutes, stirring</p><p>5. Lay out the prepared meat. Cook everything until the meat is covered with a fried crust, about 10 minutes</p><p>6. Then add carrots. Fry everything together, stirring, 3-5 minutes</p><p>7. Boil the kettle. Pour boiling water over the fried vegetables and meat (the water should cover the meat with vegetables by about 2 cm). Salt, pepper, add spices for pilaf. Cook over medium heat for 20 minutes</p><p>8. Put the rice, carefully spread it over the surface (but do not stir!). Place a head of garlic in the middle. Add water so that it covers the rice 2 cm higher. Cook pilaf at maximum heat without a lid until the liquid has almost completely evaporated, about 10–15 minutes</p><p>9. Once the water has evaporated, make the fire minimal. Make several holes in the pilaf with the handle of a spoon. Cover with a lid and leave the pilaf with pork to evaporate for 15 minutes</p>',
                category: ''
            },
        
            {
                title: 'Solyanka',
                image: '../img/r/solyanka.jpg',
                ingredients: '<ul><li>Beef 400 g</li><li>Sausages 4 pcs</li><li>Boiled sausage 200 g</li><li>Salted cucumbers 3 pcs</li><li>Ham 200 g</li><li>1 bunch of onions</li><li>1 bunch of parsley</li><li>1 jar of olives</li><li>2 tbsp tomato paste</li></ul>',
                cooking: '<p>1.We cook the broth from beef (or pork), add bay leaf and black pepper</p><p>2. We cut the meat from the broth, sausages, sausage and ham (or raw smoked sausage). Finely chop the onion, cucumbers and parsley and simmer for 10 minutes with tomato paste</p><p>3. Put the stew mixture into the broth and cook for no more than 10 minutes. Then add meat, sausages, ham and sausage. Cook until the broth boils. Pour the olives into the hodgepodge along with the brine (the olives should be pitted). Bring to a boil and turn off immediately. Serve on the table with a slice of lemon and sour cream</p>',
                category: ''
            },
        
            {
                title: 'Sushi',
                image: '../img/r/sushi.jpg',
                ingredients: '<ul><li>900g salmon fillet for sushi</li><li>2 cups sushi rice</li><li>pickled ginger</li><li>wasabi</li><li>soy sauce</li><li>8 art. l. rice vinegar</li><li>4 tbsp. l. sugar</li><li>1 tbsp. l. salt</li></ul>',
                cooking: '<p>1. Rinse the rice in 5-6 waters until the water is clear. Then pour cold water at a ratio of 1:1 plus another 10%, put on a high heat, bring to a boil, reduce the heat to a minimum, close the lid and cook for 13-14 minutes without opening. Remove from heat, cover the pan with a blanket or place it under a pillow for 30–40 minutes. For dressing, heat all the ingredients together not to a boil, but just to dissolve the sugar and salt</p><p>2. Transfer the rice to a large unvarnished wooden bowl (do not use the crust at the bottom of the sushi pan). Put warm rice in the center of the bowl, pour out all the dressing, scatter the rice with a spatula, then collect it together with the dressing again in the center - and so 4 times. Leave for 10-15 minutes. If you have non-woodenware, reduce the amount of dressing by 1/3</p><p>3. Prepare the fish. For sushi, cut the fillet along the grain and 0.5 cm thick. The main principle is to cut as many beautiful pieces of fish as possible so that it does not crumble</p><p>4. To make "koloboks" for sushi, wet your hands with water. Take about 1 tbsp. l. rice and form an oblong bun by squeezing the rice with four fingers and touching the edges with your thumb</p><p>5. Lay the sushi fish across your fingers on the lower knuckles. Place the prepared kolobok on the fish and give it the final shape depending on the size of the piece of fish, pressing down the rice with your index finger. Then turn the sushi over and press the fish on the sides with your fingers - it should fit snugly against the rice</p>',
                category: ''
            },
            {
                title: 'Taco',
                image: '../img/r/tacos.jpg',
                ingredients: '<ul><li>Minced meat 500g</li><li>Beans 50g</li><li>Taco cakes 6pcs</li><li>Onion 2 heads</li><li>Tomatoes 200g</li ><li>Green salad 200g</li><li>Greens 50g</li><li>Cucumbers 200g</li><li>Seasonings to taste</li></ul>',
                cooking: '<p>1. Fry minced meat (beef or chicken) in vegetable oil along with half of finely chopped onion until cooked</p><p>2. Finely chop the tomatoes, cucumbers, lettuce, add the remaining onion. Mix together with herbs, add salt, pepper</p><p>3. Place the cakes on a baking sheet and heat for 3-4 minutes</p><p>4. Fill the warmed cakes with minced meat, beans, put the salad on top</p>',
                category: ''
            },
            {
                title: 'Tom-Yum',
                image: '../img/r/tomyum.jpg',
                ingredients: '<ul><li>Chicken broth 2l</li><li>Tom yum pepper paste 100g</li><li>Lemon 2pcs</li><li>Fish sauce 20ml</li><li>Sugar 50g</ li><li>Lemon grass 2 tbsp. l.</li><li>Ginger 30g</li><li>Lime leaves 4pcs</li><li>Peeled shrimp 500g</li><li>Champignons 200g</li><li>Coconut milk 200ml </li><li>Cilantro 50g</li><li>Chili pepper 1pc</li></ul>',
                cooking: '<p>1.Add finely chopped ginger, lime leaves, lemongrass (two tablespoons dry or two stalks fresh) to the chicken broth and cook for five minutes</p><p>2. Add pepper paste there, mix the broth and cook for another two minutes</p><p>3. Then add fish sauce, sugar, after another two minutes, shrimp, chopped mushrooms, chili peppers, chopped into rings, and coconut milk</p><p>4. Bring to a boil, pour in the juice of two lemons, add coarsely chopped cilantro, wait until the soup boils again, and remove from heat</p>',
                category: ''
            },
        
            {
                title: 'Pancakes',
                image: '../img/r/pancakes.jpg',
                ingredients: '<ul><li>Chicken egg 1pc</li><li>Sugar 30g</li><li>Salt 0.5 tsp</li><li>Milk 250ml</li><li>Wheat flour 120g</li><li>Soda 0.5 teaspoons</li><li>Vegetable oil 2 tablespoons</li></ul>',
                cooking: '<p>1. Beat eggs, sugar and salt until foam</p><p>2. Pour half the milk, beat, gradually add half the flour so that there are no lumps. Pour in the remaining milk and gradually add the flour</p><p>3. Extinguish the soda, add to the dough, pour in the oil. Whisk well again. Let the dough stand, heat the pan</p><p>4. Lubricate the pan with a small amount of oil only for the first pancake</p><p>5. Fry over medium heat. When bubbles start to burst, turn over. A few more seconds and remove</p>',
                category: ''
            },



        ]
        localStorage.setItem('data11-eng', JSON.stringify(recipes));
    }
}
localStorage.setItem('data', recipes = [
    {
        title: 'Borsht',
        image: '../img/r/borsht.jpeg',
        ingredients: '<ul><li>1,5–2 liters of water</li><li>400–500 g pork or beef on the bone</li><li> 2 small beets</li><li>1 medium carrot</li><li>3 medium bulbs</li><li>4–5 tablespoons of vegetable oil</li><li>A pinch of citric acid, a little table vinegar or 0.5 lemon</li><li>2 tablespoons of tomato paste</li>   <li>300 g fresh white cabbage</li><li>4 medium potatoes</li><li>Salt - to taste</li><li>1–2 dried bay leaves</li><li>Greens - to tasty </li><li>1  garlic clove - optional</li></ul>',
        cooking: '<p>1.   Pour cold water into the pan, put the meat and put on medium heat. The broth will be tastier if you use meat on the bone. Keep an eye on the broth, remove the foam before boiling. When the liquid boils, cover the pan with a lid and cook over low heat for an hour and a half</p><p>2.   Wash and clean beets, carrots and onions. Grate the beets on a coarse grater, and carrots on a medium grater. Onion cut into small cubes. Pour oil into a frying pan, turn on medium heat. Saute the onions and carrots, stirring occasionally, for about 5 minutes. Then lay out the beets. Add citric acid, vinegar or lemon juice to it. Thanks to this, the borscht will be truly red and acquire a pleasant sourness. Cook roast for another 5 minutes. After that, add tomato paste, mix and leave on fire for another 5-7 minutes</p><p>3.   When the broth is cooked, remove the meat from it. While it is cooling, add shredded cabbage to the pan. After 5-10 minutes, add the potatoes cut into strips or cubes. The order of adding vegetables can be changed. If the cabbage is young, it is better to add it after the potatoes. Well, or at the same time, if your potato variety boils quickly. While the potatoes are cooking, remove the meat from the bone and cut into cubes. Put it back in the soup. Salt to taste. Add roast and stir. Cover the pot with a lid and cook for another 5-7 minutes.</p>',
        category: ''
    },

    {
        title: 'Burger',
        image: '../img/r/burger.jpeg',
        ingredients: '<ul><li>1 kg beef pulp</li><li>250 g beef fat or lard</li><li>1 large onion</li><li> salt, freshly ground black pepper</li><li> butter</li><li>6 burger buns</li><li>4 pickled cucumbers</li><li> 1 large tomato</li><li>1 red sweet onion</li><li>lettuce or romaine lettuce leaves</li><li>ketchup, mustard, mayonnaise</li></ul>',
        cooking: '<p>1.   Prepare minced meat for classic American burgers. Peel and very finely chop the onion. Melt the butter in a frying pan, put the onion and simmer over low heat for 5-7 minutes. Cool down</p><p>2.   Cut off all the films from the beef pulp. Turn the meat through a meat grinder with a large grate. Then check the fat. Add onion to meat and fat, salt, pepper and mix thoroughly</p><p>3.   Divide the burger mince into 6 equal portions and form into 6 2.5 cm thick patties with wet hands. Place on a parchment-lined tray and refrigerate for 30 minutes</p><p>4.   To serve classic American burgers, cut the onion into thin rings, the tomato and cucumbers into thin circles. Cut the buns in half and brush the cut with butter. Put all the right ingredients on the table</p><p>5.   Kindle the coals in the brazier or barbecue - they should burn well and be covered with gray ash. Heat the grate, grease. Add burgers and cook, turning every 2 minutes, until desired doneness. Then fry the buns on the coals from the cut side - literally for 10 seconds, otherwise they will burn!</p>',
        category: ''
    },

    {
        title: 'Pasta Carbonara',
        image: '../img/r/carbonara.jpg',
        ingredients: '<ul><li>Spaghetti 500g</li><li>Bacon 150g</li><li>Egg yolk 4 pcs.</li><li>Ground black pepper 1 tbsp.</li><li>Parmesan cheese grated 100g</li><li>Olive oil 2 tbsp</li><li>Salt 2 pinches</li><li>Garlic 2 tooth</li></ul>',
        cooking: '<p>1. Cook spaghetti until al dente (about 9 minutes)</p><p>2. Saute finely chopped garlic, onion and bacon in olive oil</p><p>3.  In a deep bowl, rub the cheese, add 5 tablespoons of boiling water from the pan in which the pasta is boiled, and rub with a spoon</p><p>4.  To the resulting cheese "gruel" add 4 yolks, onion, garlic, bacon and mix vigorously</p><p>5.  Drain spaghetti in a colander, mix with cheese and egg sauce, add salt and pepper if necessary</p><p>6.  The dish is immediately served on the table in pre-warmed plates.</p>',
        category: ''
    },

    {
        title: 'Chicken with rice',
        image: '../img/r/chickenrice.jpg',
        ingredients: '<ul><li>Chicken 1 kg</li><li>Carrot 150 g</li><li>Onion 100 g</li><li>Sunflower oil 50 ml</li><li>Rice Basmati 280 g</li><li>Garlic 5 g</li><li>Salt to taste</li><li>Ground black pepper to taste</li><li>Ground turmeric 1 tsp	</li><li>Ground paprika 1 tsp</li><li>Water 650 ml</li></ul>',
        cooking: '<p>1. Wash the chicken carcass, dry it and cut into portioned pieces</p><p>2. Peel carrots, cut into strips</p><p>3. Peel onion, cut into half rings</p><p>4. In refined sunflower oil, fry onions and carrots for 5 minutes over medium heat</p><p>5. Wash the rice, drain the water. Put the rice in a baking dish. You can use any other long grain rice instead of basmati.</p><p>6. We spread the fried onions and carrots on the rice along with the oil in which the vegetables were fried</p><p>7. Here we add a clove of garlic, passed through a press</p><p>8. Add salt and ground black pepper</p><p>9. Mix rice, onions, carrots and spices</p><p>10. Put chicken pieces lightly rubbed with salt on a rice and vegetable pillow.</p><p>11. Pour boiling water over the chicken and rice so that it only covers the chicken pieces</p><p>12. We cover the form with rice and chicken with foil and pinch the edges tightly</p><p>13. Bake chicken with rice in a preheated oven at 180 degrees for about 1 hour</p><p>14. Chicken with rice baked in the oven is ready</p>',
        category: ''
    },

    {
        title: 'Potato chips',
        image: '../img/r/crisps.jpg',
        ingredients: '<ul><li>кpotato 300 g </li><li>salt - a pinch</li><li>sweet ground paprika - to taste</li>    <li>vegetable oil - 2 tbsp. l.</li></ul>',
        cooking: '<p>1. Peel, wash and cut the potatoes into very thin slices (circles) about 2 mm thick. Put the sliced ​​potatoes in a bowl and pour cold water for 2-3 minutes. This is necessary in order to wash out excess starch. Drain the water, and put the potatoes on a waffle towel, dry</p><p>2. Put potato slices in a bowl, add salt, sweet ground paprika and vegetable oil, mix well. Seasonings in this dish can be used according to your taste.</p><p>3. Line a baking sheet with parchment paper. Lay out the potatoes in one layer. Cover with a second sheet of parchment paper so that the chips do not burn during baking. Bake potato chips in an oven preheated to 180 degrees for 20-25 minutes (until golden brown). Cooked chips may be a little soft, but when they cool they become crispy. Cooking time will depend on your oven and on the thickness of the slices.</p>       <p>4. Potato chips cooked in the oven, cool, put in a bowl and can be served. Appetizing, crispy chips are delicious served with ketchup</p>',
        category: ''
    },

    {
        title: 'Croissants',
        image: '../img/r/croissant.jpg',
        ingredients: '<ul><li>Wheat flour 450g</li><li>Sugar 60g</li><li>Chicken egg 2 pcs</li><li>Dry yeast 8 g</li><li>Butter 180 g</li><li>Sunflower oil 20 ml</li><li>Rock salt 5 g</li></ul>',
        cooking: '<p>1. Dilute yeast in 150 ml of warm water, let stand for 10 minutes, then mix</p><p>2. Sift flour, pour into a deep bowl. Knead 30 g of butter with your hands and grind with flour. Add 1 egg, sugar, 0.5 teaspoons of salt, yeast and knead into a smooth elastic dough (knead 10-15 minutes)</p>     <p>3. Sprinkle the table with flour, roll out the dough into a rectangle measuring 50 × 20 cm. Knead the remaining butter, divide into 3 parts. Spread 1/3 of the butter on 2/3 of the surface of the dough using the back of a tablespoon, stepping back from the edges of the dough 2-3 cm (the butter should not completely melt, but consist of small lumps)</p><p>4. Wrap the unlubricated surface over half of the lubricated surface and cover with the remaining lubricated surface. You will get a three-layer rectangle measuring approximately 17 × 20 cm. It is good to close the edges of the dough with your hands so that the oil does not come out when the dough is further rolled out</p><p>5. Turn the dough 90 degrees to the right and roll it out again into a 50x20 cm rectangle. Carefully transfer the dough onto a sheet of parchment (or tracing paper), cover with a second sheet, fold in half, cover with a towel and put in the refrigerator for 30 minutes. After the specified time has elapsed, transfer the dough to a floured table<p><p>6. Completely repeat the previous procedure 2 more times. Repeat the previous procedure 3 more times, but without oil. Put the dough in the refrigerator only after the third repetition</p><p>7. Roll out the dough into a rectangle measuring 52×30 cm, cover with a towel and leave for 10 minutes. Then cut the dough in half lengthwise, cut each layer into 8 triangles with a base of 13 cm</p><p>8. Roll croissants out of triangles, put tip down on a baking sheet greased with vegetable oil, giving them the shape of a crescent. Distance between croissants at least 5 cm</p><p>9. Lubricate the croissants with an egg and leave for 40 minutes to rise (preferably in a cupboard or a cold oven so that there are no air currents, otherwise the croissants will dry out)</p><p>10. Preheat oven to 220 degrees. Bake croissants for 15-20 minutes</p>',
        category: ''
    },

    {
        title: 'Donuts',
        image: '../img/r/donut.jpg',
        ingredients: '<ul><li>sugar 50g</li><li>dry yeast 7 pinches</li><li>water 50 ml</li><li>milk 70 ml</li>     <li>salt 5 pinches</li><li>egg 1 pc</li><li>flour 250 g</li><li>butter 15g</li><li>powdered sugar 50g</li><li>frosting to taste</li><li>confectionery topping to taste</li></ul>',
        cooking: '<p>1. Combine sugar, yeast</p><p>2. add warm water, milk, salt</p><p>3. stir until ingredients are dissolved</p><p>4. Add egg, mix</p><p>5. Add sifted flour, knead well</p><p>6. Add butter at room temperature, knead the dough again so that it sticks well from your hands.</p><p>7. Cover and leave the dough in a warm place for 30 minutes</p><p>8. The dough should double in size</p><p>9. Sprinkle the dough with powdered sugar and knead well again. The dough will become a little soft and stick to your hands, but try to knead it as best as possible. Cover the dough and send it to a warm place for 30 minutes. Get it out, knead it well with your hands again and send it to a warm place for another 30 minutes</p><p>10. Place the dough on a floured work surface and roll out thinly with a rolling pin</p><p>11. Squeeze out a small circle in the middle of the donut, cover with a towel and let stand in a warm place until they slightly increase in volume</p><p>12. Heat the vegetable oil well and fry the donuts until golden brown on both sides. The main thing is to make sure that the donuts do not burn, as they cook very quickly!</p><p>13. Put donuts on a paper towel and let cool</p><p>14. Sprinkle donuts well with powdered sugar or dip each donut in ready-made confectionery glaze</p>',
        category: ''
    },

    {
        title: 'Fish and Chips',
        image: '../img/r/fishchips.jpeg',
        ingredients: '<ul><li>4 cod fillets, 150 g each</li><li>4 non-friable potatoes</li><li>200 g flour</li><li>1 tsp. yeast</li><li>0.5 tsp baking soda</li><li>1 lemon</li><li>200 ml cold water</li><li>Peanut butter</li><li>Salt, pepper</li></ul>',
        cooking: '<p>1. sift the flour together with yeast and soda, add a pinch of salt and pepper to the sifted flour</p><p>2. Slowly pour very cold water into the flour container until the batter looks like liquid sour cream. (There is another option when yeast is not added, but water with gas or beer is used instead of ordinary water - it also gives a good result), stirring all the time with a whisk until a homogeneous mass is obtained. Cover the container with foil and leave to "rest" for 30 minutes</p><p>3. Peel the potatoes, wash, dry and cut into strips. (The thinner the straw, the faster it will fry). Rinse the potato strips under running water and pat dry with a kitchen towel. (If you wash off the starch, the potatoes will be crispy and the straws will not stick together)</p><p>4. Heat the peanut butter in a frying pan. Fry the potato strips for 4-5 minutes over medium heat until browned. (NO lid, otherwise it wont be crispy). Remove from the pan with a slotted spoon and transfer to an oven preheated to 150 °. When we fry in a large amount of fat, the products that we immerse in fat should be spacious, they should not stick to each other, so it is important to use large dishes</p><p>5. Go to fish. Remove the film from the container, mix the batter well. Immerse completely dry fillet in batter while oil is heated</p><p>6. Heat the peanut butter in another large skillet. You can check the readiness of the oil for deep-frying as follows: lower the tip of a wooden stick into the pan; if the stick starts to attract bubbles, the oil is ready to fry. Remove the fillet from the batter and fry for 3-4 minutes</p><p>7. Remove the fish with a slotted spoon, transfer to kitchen paper so that it absorbs excess fat and serve with potatoes and lemon slices</p>',
        category: ''
    },

    {
        title: 'French toast',
        image: '../img/r/frenchtoast.jpg',
        ingredients: '<ul><li>Bread for toast 6 slices</li><li>Milk 70ml</i><li>Chicken egg 3 pcs</li><li>Pinch of salt</li><li>Sugar 3 tbsp</li><li>Butter 60g</li><li>Honey to taste</li><li>Fresh berries 110g</li></ul>',
        cooking: '<p>1. Cut the bread into triangles</p><p>2. Beat eggs with milk, sugar and salt</p><p>3. Heat the pan and melt the butter</p><p>4. Dip the bread on both sides in the mixture and send to the pan</p><p>5. Fry for one and a half minutes on each side (consider the features of your stove)</p><p>6. Preheat the oven to 180 degrees and send the toasts to bake in the oven until crust</p><p>7. Garnish with berries, drizzle with honey or syrup</p>',
        category: ''
    },

    {
        title: 'French fries',
        image: '../img/r/fries.jpg',
        ingredients: '<ul><li>1 kg potatoes for frying</li><li>vegetable oil for deep frying</li><li>medium sea salt</li><li>good ketchup to serve</li></ul>',
        cooking: '<p>1. Peel the potatoes. Cut off the rounded parts on all sides so that you get a rectangular bar. Cut it lengthwise into 1 cm thick plates, each plate into 1 cm thick sticks</p><p>2. Rinse the sliced ​​potatoes in cold water and put in a pot of salted boiling water (there should be plenty of water so that the potatoes lie freely in it). Bring water to a boil over medium heat. Reduce heat to low and simmer potatoes for 2 minutes. Throw it in a colander and let it dry and cool, 20-30 minutes. All this is necessary in order to get rid of excess starch</p><p>3.Spread the cooled potatoes on a tray and put in the freezer for 20–30 minutes. This is necessary so that a crispy crust immediately forms on the potatoes during frying.</p><p>4. While the potatoes are in the freezer, prepare a deep, wide pot (or skillet, or wok) with a thick bottom for deep-frying. Pour oil into it - you should get a layer with a depth of at least 8-10 cm. The more oil, the larger portions of potatoes you can lay, leave the pan on medium-high heat and heat the oil to 190 ° C. If you dont have a thermometer, keep a few cubes of white bread with a side of 1 cm ready. If a cube thrown into hot oil fries until golden brown in 30 seconds, then the butter is ready</p><p>5. In portions, carefully, with a slotted spoon, spread the frozen potatoes in oil and fry until a beautiful golden crust on all sides, about 1 min. To keep cooked potatoes warm, lay them out for 1 minute first. on paper towels to drain excess fat, and then on a dish or baking sheet, standing in an oven preheated to 80-100 ° C</p>',
        category: ''
    },

    {
        title: 'Hot chocolate',
        image: '../img/r/hotchoco.jpg',
        ingredients: '<ul><li>Milk 250 ml</li><li>Nutella 3 teaspoons</li><li>Cream 33% 50 ml</li><li>Powdered sugar 1 teaspoon</li><li> Milk chocolate 1 piece</li><li>Marshmallow to taste</li></ul>',
        cooking: '<p>1.Heat milk without boiling</p><p>2. Add Nutella and mix well with a whisk</p><p>3. Whip cream with icing sugar until thick, carefully place on top</p><p>4. Sprinkle with grated chocolate, decorate marshmallow</p>',
        category: ''
    },

    {
        title: 'Khinkali',
        image: '../img/r/khinkali.jpg',
        ingredients: '<ul><li>Wheat flour 500g</li><li>Water 300ml</li><li>Salt 1.5 tsp</li><li>Veal 250g</li><li>Beef 250g</li> <li>Salo 100g</li><li>Onion 100g</li><li>Garlic 2 cloves</li><li>Ground cumin (zira) to taste</li><li>Red chili pepper to taste to taste</li><li>Cilantro to taste</li></ul>',
        cooking: '<p>1.Meat, peeled from veins, is turned into minced meat - the brisket or the back of a young individual. Then lard, finely chopped onion and garlic are added. At the end, water intervenes - as much as the minced meat can absorb without separating into meat and water fractions. For a pound of meat - about 150 ml. To taste, you can add salt, cumin, hot pepper (you can cook it yourself) and cilantro</p><p>2. Knead the dough from flour, salt and 150 ml of water - quite dense and tight. It will be difficult to knead and roll it out by hand - so if you have a dough mixer and especially a dough sheeter, they will make the process very easy. The dough can be stored in a cool place for no more than an hour, then it begins to rapidly lose its noble qualities.</p><p>3. The success of future khinkali depends on the number of layers in the dough: ideally, there should be about twenty. To do this, roll out the dough with a rolling pin into a centimeter layer and cut it into 4 × 4 cm squares. Each piece must be rolled out and folded, sprinkled with flour every other time, again and again - at least 10 times. The result should be puff sheets 3 mm thick</p><p>4. Minced meat is prepared in advance, because as soon as the sheets of dough are ready, you need to wrap the meat in them immediately so that the dough does not dry out. In the middle of each sheet put a small ladle of minced meat, about 40 grams. If the mixed water managed to appear on the minced meat, before spreading it on the dough, it must be thoroughly mixed again until smooth</p><p>5. The edges of the sheet are folded with an accordion as tightly as possible. There are nineteen folds in the ideal khinkali. Take the fastened bag in one hand, and twist the other in the same direction that the folds were made, and tear off the excess dough - the khinkali will get a dense stump on top. Put the khinkali on the board so that it has a flat bottom, which will then be convenient to bite into</p><p>6. With a spatula, spin rapidly boiling water in a spacious saucepan, salt, throw in a dozen khinkali and again make a whirlpool in the saucepan. The point is that the khinkali do not shrink and do not stick to each other or to the bottom. Cook until the khinkali float upside down. Plus another two or three minutes - about ten minutes in total. Take it out carefully - with a slotted spoon</p><p>7. The catch is laid out on a dish. As a rule, the amount is boiled in multiples of ten, each subsequent portion is prepared anew. The final gesture before the start of the meal is sprinkling the still moist, steaming khinkali with freshly ground black pepper, which immediately releases the right spirit from them. Start eating immediately</p>',
        category: ''
    },

    {
        title: 'Lasagna',
        image: '../img/r/lasagna.jpg',
        ingredients: '<ul><li>2 tablespoons olive oil</li><li>1 onion</li><li>500 g ground beef</li><li>salt to taste</li><li>ground black pepper - to taste</li><li>500 g of passata or fresh tomatoes without skins, cut into small cubes</li><li>1 teaspoon of dried basil</li><li>40 g of butter + a little for greasing</li><li>40 g flour</li><li>400 ml milk</li><li>salt to taste</li><li>ground black pepper to taste</li><li>ground nutmeg, to taste</li><li>250g lasagne sheets</li><li>50g Parmesan</li></ul>',
        cooking: '<p>1. Heat the oil in a frying pan and sauté the finely chopped onion until golden brown. Put the minced meat and fry, stirring, until the meat is ready. Season with salt and pepper</p><p>2. Add the passata or tomatoes, stir and simmer for about 10 minutes. Then combine the mass with basil</p><p>3. Melt the butter in a saucepan over moderate heat. While stirring with a whisk, add flour. Whisking continuously, gradually pour in the milk. Boil the bechamel sauce, stirring constantly, until it thickens. Season with salt, pepper and nutmeg</p><p>4. Grease a baking dish with oil. Place a few sheets of lasagna on the bottom and cover them with some of the sauce. Spread some of the meat filling on top. Repeat layers. Top with béchamel sauce sprinkled with grated parmesan. Bake for 30 minutes at 190 °C</p>',
        category: ''
    },

    {
        title: 'Pizza Margherita',
        image: '../img/r/margarita.jpg',
        ingredients: '<ul><li>Wheat flour 1.5 cups</li><li>Dry yeast 1 tsp</li><li>Sugar 1 tsp</li><li>Water 0.5 cups</li><li>Salt 0.5 tsp</li><li>Olive oil 4 tbsp</li><li>Tomato paste 3 tbsp</li><li>Olive oil 2 tbsp</li><li>Garlic 1 head</li><li>Salt to taste</li><li>Basil 6l</li><li>Mozzarella 200g</li><li>Cherry tomatoes 8pcs</li></ul>',
        cooking: '<p>1. Start making pizza with the dough. Heat the water to a temperature of 37-40 degrees. Dissolve sugar in it and add yeast. If you do not have a cooking thermometer, determine the temperature in the following way: put a drop of water on the inside of your wrist. If the sensation is neutral, then the temperature is correct. Leave in a warm place for 5-15 minutes to activate the yeast</p><p>2. Add salt, 2 tablespoons of olive oil to the dough and mix well until smooth.</p><p>3. The properties of flour of the same variety, but different manufacturers may differ. Therefore, to get the desired consistency, add flour in small portions. When it becomes difficult to knead with a spoon, start doing it with your hands. Knead the dough thoroughly</p><p>4. The dough should be soft, tender and slightly sticky to your hands. Lubricate the bowl and hands with vegetable oil. Form a ball from the dough, cover the bowl with cling film or a towel so that it does not dry out and rises well. Leave in a warm place while you prepare the filling.</p><p>5. Start preparing the filling. Dried basil can be substituted for fresh basil. Tomatoes choose a small size, dense and fleshy so that they do not spread and retain their shape during baking</p><p>6. Peel and wash the garlic, cut along the clove into 2 parts. Heat oil in a hot frying pan. Sauté the garlic over medium heat for 2 minutes, stirring</p><p>7. Add tomato paste to garlic. If the paste is too thick, add some water so that you can get a smooth paste. Bring to a boil, stirring constantly, season with salt to taste. Simmer for another 2 minutes<p><p>8. Remove sluggish leaves and hard stems from basil, rinse, dry and chop with a knife. Add to skillet and stir. The sauce is ready</p><p>9. Transfer it to a small container and let it cool. Remove the garlic, you will no longer need it</p><p>10. Cut the mozzarella into pieces 3-5 mm thick. Some can, like me, grate</p><p>11. Wash the tomatoes, remove the stalk and cut into circles or just in half</p><p>12. When the sauce has cooled, proceed to the formation of pizza. Turn on the oven to heat up to 220 degrees so that it has time to warm up</p><p>13. Knead the dough with your hands into a round layer 3-5 mm thick. Leave the edges thicker to form a side</p><p>14. Brush the dough evenly with the sauce</p><p>15. Top with mozzarella</p><p>16. Next, arrange the tomatoes</p><p>17. Bake for 10-15 minutes on the middle shelf of an oven preheated to 220 degrees in the "top-bottom" mode. Determine the exact time and temperature according to your oven. In the finished pizza, the edges of the dough will lightly brown. For a perfect Margherita pizza, the Mozzarella pieces should only be slightly melted</p>',
        category: ''
    },

    {
        title: 'Milkshake',
        image: '../img/r/milkshake.jpg',
        ingredients: '<ul><li>Milk 3.2% 350ml</li><li>Ice cream 60g</li><li>Dark chocolate 100g</li><li>Whipped cream to taste</li><li>Chocolate chips to taste </li></ul>',
        cooking: '<p>1. Prepare chocolate topping. Pour half of the total volume of milk into the container. Break the chocolate bar into small pieces and add to the milk. Put the container on a slow fire and heat until the chocolate and milk turn into a homogeneous mass, then cool. To save time, you can melt the chocolate in the microwave</p><p>2. Connect products. Put the ice cream, melted milk with chocolate and the remaining milk into the blender bowl. Beat until smooth airy mass at high speed for about 4-5 minutes</p><p>3. Pour the finished drink into tall transparent glasses. Insert cocktail tube. Top with whipped cream and chocolate chips</p>',
        category: ''
    },

    {
        title: 'Pilaf',
        image: '../img/r/pilaf.jpg',
        ingredients: '<ul><li>Carrot 2pcs</li><li>Pork 500g</li><li>Onion 2pcs</li><li>Rice 2 cups</li><li>Vegetable oil 50ml</li><li >Salt to taste</li><li>Pilaf spices to taste</li><li>Garlic 1 head</li></ul>',
        cooking: '<p>1. Wash the meat, dry it, cut into pieces</p><p>2. Peel, wash and cut onions into thin half rings</p><p>3. Peel, wash and cut the carrots</p><p>4. Make zirvak (this is the basis of pilaf, namely meat, carrots, onions and spices). To do this, heat the cauldron. Pour vegetable oil. Roast it well. Lay out the prepared onion. Fry until golden brown about 5-7 minutes, stirring</p><p>5. Lay out the prepared meat. Cook everything until the meat is covered with a fried crust, about 10 minutes</p><p>6. Then add carrots. Fry everything together, stirring, 3-5 minutes</p><p>7. Boil the kettle. Pour boiling water over the fried vegetables and meat (the water should cover the meat with vegetables by about 2 cm). Salt, pepper, add spices for pilaf. Cook over medium heat for 20 minutes</p><p>8. Put the rice, carefully spread it over the surface (but do not stir!). Place a head of garlic in the middle. Add water so that it covers the rice 2 cm higher. Cook pilaf at maximum heat without a lid until the liquid has almost completely evaporated, about 10–15 minutes</p><p>9. Once the water has evaporated, make the fire minimal. Make several holes in the pilaf with the handle of a spoon. Cover with a lid and leave the pilaf with pork to evaporate for 15 minutes</p>',
        category: ''
    },

    {
        title: 'Solyanka',
        image: '../img/r/solyanka.jpg',
        ingredients: '<ul><li>Beef 400 g</li><li>Sausages 4 pcs</li><li>Boiled sausage 200 g</li><li>Salted cucumbers 3 pcs</li><li>Ham 200 g</li><li>1 bunch of onions</li><li>1 bunch of parsley</li><li>1 jar of olives</li><li>2 tbsp tomato paste</li></ul>',
        cooking: '<p>1.We cook the broth from beef (or pork), add bay leaf and black pepper</p><p>2. We cut the meat from the broth, sausages, sausage and ham (or raw smoked sausage). Finely chop the onion, cucumbers and parsley and simmer for 10 minutes with tomato paste</p><p>3. Put the stew mixture into the broth and cook for no more than 10 minutes. Then add meat, sausages, ham and sausage. Cook until the broth boils. Pour the olives into the hodgepodge along with the brine (the olives should be pitted). Bring to a boil and turn off immediately. Serve on the table with a slice of lemon and sour cream</p>',
        category: ''
    },

    {
        title: 'Sushi',
        image: '../img/r/sushi.jpg',
        ingredients: '<ul><li>900g salmon fillet for sushi</li><li>2 cups sushi rice</li><li>pickled ginger</li><li>wasabi</li><li>soy sauce</li><li>8 art. l. rice vinegar</li><li>4 tbsp. l. sugar</li><li>1 tbsp. l. salt</li></ul>',
        cooking: '<p>1. Rinse the rice in 5-6 waters until the water is clear. Then pour cold water at a ratio of 1:1 plus another 10%, put on a high heat, bring to a boil, reduce the heat to a minimum, close the lid and cook for 13-14 minutes without opening. Remove from heat, cover the pan with a blanket or place it under a pillow for 30–40 minutes. For dressing, heat all the ingredients together not to a boil, but just to dissolve the sugar and salt</p><p>2. Transfer the rice to a large unvarnished wooden bowl (do not use the crust at the bottom of the sushi pan). Put warm rice in the center of the bowl, pour out all the dressing, scatter the rice with a spatula, then collect it together with the dressing again in the center - and so 4 times. Leave for 10-15 minutes. If you have non-woodenware, reduce the amount of dressing by 1/3</p><p>3. Prepare the fish. For sushi, cut the fillet along the grain and 0.5 cm thick. The main principle is to cut as many beautiful pieces of fish as possible so that it does not crumble</p><p>4. To make "koloboks" for sushi, wet your hands with water. Take about 1 tbsp. l. rice and form an oblong bun by squeezing the rice with four fingers and touching the edges with your thumb</p><p>5. Lay the sushi fish across your fingers on the lower knuckles. Place the prepared kolobok on the fish and give it the final shape depending on the size of the piece of fish, pressing down the rice with your index finger. Then turn the sushi over and press the fish on the sides with your fingers - it should fit snugly against the rice</p>',
        category: ''
    },
    {
        title: 'Taco',
        image: '../img/r/tacos.jpg',
        ingredients: '<ul><li>Minced meat 500g</li><li>Beans 50g</li><li>Taco cakes 6pcs</li><li>Onion 2 heads</li><li>Tomatoes 200g</li ><li>Green salad 200g</li><li>Greens 50g</li><li>Cucumbers 200g</li><li>Seasonings to taste</li></ul>',
        cooking: '<p>1. Fry minced meat (beef or chicken) in vegetable oil along with half of finely chopped onion until cooked</p><p>2. Finely chop the tomatoes, cucumbers, lettuce, add the remaining onion. Mix together with herbs, add salt, pepper</p><p>3. Place the cakes on a baking sheet and heat for 3-4 minutes</p><p>4. Fill the warmed cakes with minced meat, beans, put the salad on top</p>',
        category: ''
    },
    {
        title: 'Tom-Yum',
        image: '../img/r/tomyum.jpg',
        ingredients: '<ul><li>Chicken broth 2l</li><li>Tom yum pepper paste 100g</li><li>Lemon 2pcs</li><li>Fish sauce 20ml</li><li>Sugar 50g</ li><li>Lemon grass 2 tbsp. l.</li><li>Ginger 30g</li><li>Lime leaves 4pcs</li><li>Peeled shrimp 500g</li><li>Champignons 200g</li><li>Coconut milk 200ml </li><li>Cilantro 50g</li><li>Chili pepper 1pc</li></ul>',
        cooking: '<p>1.Add finely chopped ginger, lime leaves, lemongrass (two tablespoons dry or two stalks fresh) to the chicken broth and cook for five minutes</p><p>2. Add pepper paste there, mix the broth and cook for another two minutes</p><p>3. Then add fish sauce, sugar, after another two minutes, shrimp, chopped mushrooms, chili peppers, chopped into rings, and coconut milk</p><p>4. Bring to a boil, pour in the juice of two lemons, add coarsely chopped cilantro, wait until the soup boils again, and remove from heat</p>',
        category: ''
    },

    {
        title: 'Pancakes',
        image: '../img/r/pancakes.jpg',
        ingredients: '<ul><li>Chicken egg 1pc</li><li>Sugar 30g</li><li>Salt 0.5 tsp</li><li>Milk 250ml</li><li>Wheat flour 120g</li><li>Soda 0.5 teaspoons</li><li>Vegetable oil 2 tablespoons</li></ul>',
        cooking: '<p>1. Beat eggs, sugar and salt until foam</p><p>2. Pour half the milk, beat, gradually add half the flour so that there are no lumps. Pour in the remaining milk and gradually add the flour</p><p>3. Extinguish the soda, add to the dough, pour in the oil. Whisk well again. Let the dough stand, heat the pan</p><p>4. Lubricate the pan with a small amount of oil only for the first pancake</p><p>5. Fry over medium heat. When bubbles start to burst, turn over. A few more seconds and remove</p>',
        category: ''
    },



]);
checkLocalStorage();