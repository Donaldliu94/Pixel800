# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user = User.create!(username: 'Employer', password: 'password');


post1 = Post.create(title: 'Big O Notation', photographer_id: 1, description: "")
post2 = Post.create(title: 'DROP TABLE table_name;', photographer_id: 2, description: "")
post3 = Post.create(title: '"Road".split("")', photographer_id: 3, description: "")
post4 = Post.create(title: '"cup".concat("cakes")', photographer_id: 4, description: "")
post5 = Post.create(title: 'Pie.slice(1,8);', photographer_id: 5, description: "")
post6 = Post.create(title: '"doof".reverse', photographer_id: 6, description: "")
post7 = Post.create(title: 'People.destroy_all', photographer_id: 7, description: "")
post8 = Post.create(title: '[Bread] << Veggie', photographer_id: 8, description: "")