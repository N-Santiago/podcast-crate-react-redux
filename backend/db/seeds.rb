# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
podcasts = Podcast.create([{title: 'WTF With Marc Maron', website: 'http://www.wtfpod.com/', user_id: 1}])
user = User.create(email: "testuser@gmail.com", password: "testuser!")
