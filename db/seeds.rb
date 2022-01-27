
###------------------Users-----------------------------
puts "Seeding Users..."

User.destroy_all

user1 = User.create( name: "Adam Bosak", email: "adam@nintendo.com" )


###------------------Platforms-----------------------------

puts "Seeding Platforms..."

Platform.destroy_all

platform1 = Platform.create( 
        title: "Nintendo Entertainment System (NES)", 
        year: 1983, image_url: "https://i.ebayimg.com/images/g/3kcAAOSwAPVee3IP/s-l300.jpg" 
    )


platform2 = Platform.create( 
        title: "Super Nintendo Entertainment System (SNES)", 
        year: 1990, 
        image_url: "https://preview.redd.it/nqfrqyt8ek401.png?auto=webp&s=0f0932f1b8dd01ffacaacea2728ff5ad74610f8c" 
    )

platform3 = Platform.create( 
        title: "Nintendo 64 (N64) ", 
        year: 1996 , 
        image_url: "https://cdn.dribbble.com/users/807174/screenshots/6946983/mockup-bottom-packaging_4x.png" 
    )

platform4 = Platform.create( 
        title: "Nintendo Gamecube", 
        year: 2001, 
        image_url: "https://gamefaqs.gamespot.com/a/box/2/0/0/55200_front.jpg" 
    )

platform5 = Platform.create( 
        title: "Wii", 
        year: 2006 , 
        image_url: "https://m.media-amazon.com/images/I/41xM31QiwdL.jpg" 
    )

platform6 = Platform.create( 
        title: "Wii U", 
        year: 2012, 
        image_url: "https://m.media-amazon.com/images/I/51PAvGoHi0L.jpg " 
    )
platform7= Platform.create( 
        title: "Switch", 
        year: 2017, 
        image_url: "https://m.media-amazon.com/images/S/aplus-media/sota/82098e0a-1145-444e-8c9c-2df953eda46e.__CR0,0,970,600_PT0_SX970_V1___.jpg" 
    )



###------------------Games-----------------------------

puts "Seeding Games..."

Game.destroy_all


#---------------------NES------------------------------
game1 = Game.create( 
        title: "Teenage Mutant Ninja Turtles", 
        year: 1989, 
        genre:"Action", 
        image_url:"https://media.gamestats.com/gg/image/object/008/008051/TMNT1_NESBOXboxart_160w.jpg", 
        platform_id: platform1.id 
    )

game2 = Game.create( 
        title: "Duck Hunt", 
        year: 1985, 
        genre:"Arcade", 
        image_url:"https://media.gamestats.com/gg/image/object/007/007158/duckhunt_NESBOXboxart_160w.jpg", 
        platform_id: platform1.id 
    )
game3 = Game.create( 
        title: "Zelda II: The Adventure of LInk", 
        year: 1989, 
        genre:"Adventure", 
        image_url:"https://media.gamestats.com/gg/image/object/005/005991/zelda2nes_nesboxboxart_160w.jpg", 
        platform_id: platform1.id 
    )
game4 = Game.create( 
        title: "Castlevania", 
        year: 1987, 
        genre:"Action", 
        image_url:"https://media.gamestats.com/gg/image/object/007/007096/Castlevania_NES_box_artboxart_160w.jpg", 
        platform_id: platform1.id 
    )
game5 = Game.create( 
        title: "Super Maro Bros. 3", 
        year: 1990, 
        genre:"Platformer", 
        image_url:"https://i.ebayimg.com/images/g/JMcAAMXQaBtQ9yRk/s-l300.jpg", 
        platform_id: platform1.id 
    )
game6 = Game.create( 
        title: "Metroid", 
        year: 1987, 
        genre:"Platformer", 
        image_url:"https://media.ign.com/games/image/object/006/006006/Metroid_NES_US_ORIGINALboxart_160w.jpg", 
        platform_id: platform1.id 
    )



# ###------------------Reviews-----------------------------

puts "Seeding Reviews..."

Review.destroy_all

review1 = Review.create( 
    comment: "Still one of my favorite games to revisit :)!", 
    user_id: user1.id,
    game_id: game6.id

)
review2 = Review.create( 
    comment: "Hopping on koopas and goombas will never not bring a smile to my face. ", 
    user_id: user1.id,
    game_id: game5.id

)
review3 = Review.create( 
    comment: "Battling it out with the Belmonts in a creepy castle, I'm in.", 
    user_id: user1.id,
    game_id: game4.id

)
review4 = Review.create( 
    comment: "Any zelda game is at the top of my list!", 
    user_id: user1.id,
    game_id: game3.id

)
review5 = Review.create( 
    comment: "I spent HOURS of my childhood playing duck hunt, one of the GOAT", 
    user_id: user1.id,
    game_id: game2.id

)
review6 = Review.create( 
    comment: "Any video game featuring pizza eating ninja turtles is a game you want to play", 
    user_id: user1.id,
    game_id: game1.id

)


puts "Finished seeding..."
