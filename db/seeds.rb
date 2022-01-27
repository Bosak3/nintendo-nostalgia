
###------------------Users-----------------------------
puts "Seeding Users..."

User.destroy_all

user1 = User.create( name: "Adam Bosak", email: "adam@nintendo.com" )


###------------------Platforms-----------------------------

puts "Seeding Platforms..."

Platform.destroy_all

platform1 = Platform.create( title: "Nintendo Entertainment System (NES)", year: 1983, image_url: "https://i.ebayimg.com/images/g/3kcAAOSwAPVee3IP/s-l300.jpg" )
platform2 = Platform.create( title: "Super Nintendo Entertainment System (SNES)", year: 1990 , image_url: "https://preview.redd.it/nqfrqyt8ek401.png?auto=webp&s=0f0932f1b8dd01ffacaacea2728ff5ad74610f8c" )
platform3 = Platform.create( title: "Nintendo 64 (N64) ", year: 1996 , image_url: "https://cdn.dribbble.com/users/807174/screenshots/6946983/mockup-bottom-packaging_4x.png" )
platform4 = Platform.create( title: "Nintendo Gamecube", year: 2001, image_url: "https://gamefaqs.gamespot.com/a/box/2/0/0/55200_front.jpg" )
platform5 = Platform.create( title: "Wii", year: 2006 , image_url: "https://m.media-amazon.com/images/I/41xM31QiwdL.jpg" )
platform6 = Platform.create( title: "Wii U", year: 2012, image_url: "https://m.media-amazon.com/images/I/51PAvGoHi0L.jpg " )
platform7= Platform.create( title: "Switch", year: 2017, image_url: "https://m.media-amazon.com/images/S/aplus-media/sota/82098e0a-1145-444e-8c9c-2df953eda46e.__CR0,0,970,600_PT0_SX970_V1___.jpg" )



###------------------Games-----------------------------

# puts "Seeding Games..."

# Game.destroy_all

# game1 = Game.create( name: "Adam Bosak", email: "adam@nintendo.com" )



# ###------------------Reviews-----------------------------

# puts "Seeding Reviews..."

# Review.destroy_all

# review1 = Review.create( name: "Adam Bosak", email: "adam@nintendo.com" )

# puts "Finished seeding..."
