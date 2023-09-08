export const GetRecipes = () =>  {
    const Curry = {
        'Fancy Apple Curry': {
            'name': 'Fancy Apple Curry',
            'lowercase': 'fancyapplecurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 7,
            },
        },
        'Grilled Tail Curry': {
            'name': 'Grilled Tail Curry',
            'lowercase': 'grilledtailcurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Slowpoke Tail': 8,
                'Fiery Herb': 25,
            },
        },
        'Solar Power Tomato Curry': {
            'name': 'Solar Power Tomato Curry',
            'lowercase': 'solarpowertomatocurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Snoozy Tomato': 10,
                'Fiery Herb': 5,
            },
        },
        'Dream Eater Butter Curry': {
            'name': 'Dream Eater Butter Curry',
            'lowercase': 'dreameaterbuttercurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Soft Potato': 18,
                'Snoozy Tomato': 15,
                'Soothing Cacao': 12,
                'Moomoo Milk': 10,
            },
        },
        'Spicy Leek Curry': {
            'name': 'Spicy Leek Curry',
            'lowercase': 'spicyleekcurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Large Leek': 14,
                'Warming Ginger': 10,
                'Fiery Herb': 8,
            },
        },
        'Spore Mushroom Curry': {
            'name': 'Spore Mushroom Curry',
            'lowercase': 'sporemushroomcurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Tasty Mushroom': 14,
                'Soft Potato': 9,
            },
        },
        'Egg Bomb Curry': {
            'name': 'Egg Bomb Curry',
            'lowercase': 'eggbombcurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Honey': 12,
                'Fancy Apple': 11,
                'Fancy Egg': 8,
                'Soft Potato': 4,
            },
        },
        'Hearty Cheeseburger Curry': {
            'name': 'Hearty Cheeseburger Curry',
            'lowercase': 'heartycheeseburgercurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 8,
                'Bean Sausage': 8,
            },
        },
        'Soft Potato Chowder': {
            'name': 'Soft Potato Chowder',
            'lowercase': 'softpotatochowder',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 10,
                'Soft Potato': 8,
                'Tasty Mushroom': 4,
            },
        },
        'Simple Chowder': {
            'name': 'Simple Chowder',
            'lowercase': 'simplechowder',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 7,
            },
        },
        'Beanburger Curry': {
            'name': 'Beanburger Curry',
            'lowercase': 'beanburgercurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Bean Sausage': 7,
            },
        },
        'Mild Honey Curry': {
            'name': 'Mild Honey Curry',
            'lowercase': 'mildhoneycurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Honey': 7,
            },
        },
        'Ninja Curry': {
            'name': 'Ninja Curry',
            'lowercase': 'ninjacurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Greengrass Soybeans': 15,
                'Bean Sausage': 9,
                'Large Leek': 9,
                'Tasty Mushroom': 5,
            },
        },
        'Drought Katsu Curry': {
            'name': 'Drought Katsu Curry',
            'lowercase': 'droughtkatsucurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Bean Sausage': 10,
                'Pure Oil': 5,
            },
        },
        'Melty Omelette Curry': {
            'name': 'Melty Omelette Curry',
            'lowercase': 'meltyomelettecurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Fancy Egg': 10,
                'Snoozy Tomato': 6,
            },
        },
        'Bulk Up Bean Curry': {
            'name': 'Bulk Up Bean Curry',
            'lowercase': 'bulkupbeancurry',
            'category': 'Curry',
            'collected': false,
            'ingredients': {
                'Greengrass Soybeans': 12,
                'Bean Sausage': 6,
                'Fiery Herb': 4,
                'Fancy Egg': 4,
            },
        },
    };

    const Salad = {
        'Slowpoke Tail Pepper Salad': {
            'name': 'Slowpoke Tail Pepper Salad',
            'lowercase': 'slowpoketailpeppersalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Slowpoke Tail': 10,
                'Fiery Herb': 10,
                'Pure Oil': 15,
            },
        },
        'Spore Mushroom Salad': {
            'name': 'Spore Mushroom Salad',
            'lowercase': 'sporemushroomsalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Tasty Mushroom': 17,
                'Snoozy Tomato': 8,
                'Pure Oil': 8,
            },
        },
        'Snow Cloak Caesar Salad': {
            'name': 'Snow Cloak Caesar Salad',
            'lowercase': 'snowcloakcaesarsalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 10,
                'Bean Sausage': 6,
            },
        },
        'Gluttony Potato Salad': {
            'name': 'Gluttony Potato Salad',
            'lowercase': 'gluttonypotatosalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Soft Potato': 14,
                'Fancy Egg': 9,
                'Bean Sausage': 7,
                'Fancy Apple': 6,
            },
        },
        'Water Veil Tofu Salad': {
            'name': 'Water Veil Tofu Salad',
            'lowercase': 'waterveiltofusalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Greengrass Soybeans': 10,
                'Snoozy Tomato': 6,
            },
        },
        'Superpower Extreme Salad': {
            'name': 'Superpower Extreme Salad',
            'lowercase': 'superpowerextremesalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Bean Sausage': 9,
                'Warming Ginger': 6,
                'Fancy Egg': 5,
                'Soft Potato': 3,
            },
        },
        'Bean Ham Salad': {
            'name': 'Bean Ham Salad',
            'lowercase': 'beanhamsalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Bean Sausage': 8,
            },
        },
        'Snoozy Tomato Salad': {
            'name': 'Snoozy Tomato Salad',
            'lowercase': 'snoozytomatosalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Snoozy Tomato': 8,
            },
        },
        'Moomoo Caprese Salad': {
            'name': 'Moomoo Caprese Salad',
            'lowercase': 'moomoocapresesalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 12,
                'Snoozy Tomato': 6,
                'Pure Oil': 5,
            },
        },
        'Contrary Chocolate Meat Salad': {
            'name': 'Contrary Chocolate Meat Salad',
            'lowercase': 'contrarychocolatemeatsalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Soothing Cacao': 14,
                'Bean Sausage': 9,
            },
        },
        'Overheat Ginger Salad': {
            'name': 'Overheat Ginger Salad',
            'lowercase': 'overheatgingersalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Fiery Herb': 17,
                'Warming Ginger': 10,
                'Snoozy Tomato': 8,
            },
        },
        'Fancy Apple Salad': {
            'name': 'Fancy Apple Salad',
            'lowercase': 'fancyapplesalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 8,
            },
        },
        'Immunity Leek Salad': {
            'name': 'Immunity Leek Salad',
            'lowercase': 'immunityleeksalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Large Leek': 10,
                'Warming Ginger': 5,
            },
        },
        'Dazzling Apple Cheese Salad': {
            'name': 'Dazzling Apple Cheese Salad',
            'lowercase': 'dazzlingapplecheesesalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 15,
                'Moomoo Milk': 5,
                'Pure Oil': 3,
            },
        },
        'Ninja Salad': {
            'name': 'Ninja Salad',
            'lowercase': 'ninjasalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Large Leek': 15,
                'Greengrass Soybeans': 15,
                'Tasty Mushroom': 12,
                'Warming Ginger': 11,
            },
        },
        'Heat Wave Tofu Salad': {
            'name': 'Heat Wave Tofu Salad',
            'lowercase': 'heatwavetofusalad',
            'category': 'Salad',
            'collected': false,
            'ingredients': {
                'Greengrass Soybeans': 10,
                'Fiery Herb': 6,
            },
        },
    };

    const Dessert = {
        'Fluffy Sweet Potatoes': {
            'name': 'Fluffy Sweet Potatoes',
            'lowercase': 'fluffysweetpotatoes',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Soft Potato': 9,
                'Moomoo Milk': 5,
            },
        },
        'Steadfast Ginger Cookies': {
            'name': 'Steadfast Ginger Cookies',
            'lowercase': 'steadfastgingercookies',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Honey': 14,
                'Warming Ginger': 12,
                'Soothing Cacao': 5,
                'Fancy Egg': 4,
            },
        },
        'Fancy Apple Juice': {
            'name': 'Fancy Apple Juice',
            'lowercase': 'fancyapplejuice',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 8,
            },
        },
        'Craft Soda Pop': {
            'name': 'Craft Soda Pop',
            'lowercase': 'craftsodapop',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Honey': 9,
            },
        },
        'Ember Ginger Tea': {
            'name': 'Ember Ginger Tea',
            'lowercase': 'embergingertea',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Warming Ginger': 9,
                'Fancy Apple': 7,
            },
        },
        'Jigglypuff\'s Fruity Flan': {
            'name': 'Jigglypuff\'s Fruity Flan',
            'lowercase': 'jigglypuffsfruityflan',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Honey': 20,
                'Fancy Egg': 15,
                'Moomoo Milk': 10,
                'Fancy Apple': 10,
            },
        },
        'Lovely Kiss Smoothie': {
            'name': 'Lovely Kiss Smoothie',
            'lowercase': 'lovelykisssmoothie',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 11,
                'Moomoo Milk': 9,
                'Honey': 7,
                'Soothing Cacao': 8,
            },
        },
        'Lucky Chant Apple Pie': {
            'name': 'Lucky Chant Apple Pie',
            'lowercase': 'luckychantapplepie',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Fancy Apple': 12,
                'Moomoo Milk': 4,
            },
        },
        'Neroli\'s Restorative Tea': {
            'name': 'Neroli\'s Restorative Tea',
            'lowercase': 'nerolisrestorativetea',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Warming Ginger': 11,
                'Fancy Apple': 15,
                'Tasty Mushroom': 9,
            },
        },
        'Sweet Scent Chocolate Cake': {
            'name': 'Sweet Scent Chocolate Cake',
            'lowercase': 'sweetscentchocolatecake',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Honey': 9,
                'Soothing Cacao': 8,
                'Moomoo Milk': 7,
            },
        },
        'Warm Moomoo Milk': {
            'name': 'Warm Moomoo Milk',
            'lowercase': 'warmmoomoomilk',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Moomoo Milk': 7,
            },
        },
        'Cloud Nine Soy Cake': {
            'name': 'Cloud Nine Soy Cake',
            'lowercase': 'cloudninesoycake',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Fancy Egg': 8,
                'Greengrass Soybeans': 7,
            },
        },
        'Hustle Protein Smoothie': {
            'name': 'Hustle Protein Smoothie',
            'lowercase': 'hustleproteinsmoothie',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Greengrass Soybeans': 15,
                'Soothing Cacao': 8,
            },
        },
        'Stalwart Vegetable Juice': {
            'name': 'Stalwart Vegetable Juice',
            'lowercase': 'stalwartvegetablejuice',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Snoozy Tomato': 9,
                'Fancy Apple': 7,
            },
        },
        'Big Malasada': {
            'name': 'Big Malasada',
            'lowercase': 'bigmalasada',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Pure Oil': 10,
                'Moomoo Milk': 7,
                'Honey': 6,
            },
        },
        'Huge Power Soy Donuts': {
            'name': 'Huge Power Soy Donuts',
            'lowercase': 'hugepowersoydonuts',
            'category': 'Dessert',
            'collected': false,
            'ingredients': {
                'Pure Oil': 9,
                'Greengrass Soybeans': 6,
                'Soothing Cacao': 7,
            },
        },
    };

    const Recipes = {
        'Curry': Curry,
        'Salad': Salad,
        'Dessert': Dessert,
    };

    return Recipes;
};
