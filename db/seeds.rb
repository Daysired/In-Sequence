# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Project.destroy_all
Study.destroy_all
User.destroy_all

@daisy = User.create!(username: 'daisy', email: 'daisy@email.com', password: '331280')

puts "#{User.count} users created"

@javascript = Study.create!(topic: 'Javascript', description: 'JavaScript  is a prototype-based, multi-paradigm scripting language that is dynamic, and supports object-oriented,  and functional programming styles.', logo_url: 'https://i.imgur.com/6SkkFhY.png', documentation_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', user: @daisy)
@react = Study.create!(topic: 'React', description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.', logo_url: 'https://i.imgur.com/pCEOrsF.png',documentation_url: 'https://reactjs.org/docs/getting-started.html', user: @daisy)
@rails = Study.create!(topic: 'Rails', description: 'Rails is a software library that extends the Ruby programming language. Rails is a framework for building websites. As such, Rails establishes conventions for easier collaboration and maintenance. These conventions are codified as the Rails API.', logo_url: 'https://i.imgur.com/NM9e0T7.png',documentation_url: 'https://guides.rubyonrails.org/index.html', user: @daisy)
@python = Study.create!(topic: 'Python', description: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics.', logo_url: 'https://i.imgur.com/MW1yX7e.png',documentation_url: 'https://www.python.org/doc/', user: @daisy)

puts "#{Study.count} Studies created"

@p1 = Project.create!(name: 'Heroes Vs Villains', description: 'This project is an application that allows users to search their favorite superheroes and villains and assemble a team', img_url: 'https://i.imgur.com/qW3jBXa.png', deployed_url: 'https://daysired.github.io/Heroes-Vs-Villains/index.html', stack: 'HTML and Javascript', user: @daisy)
@p2 = Project.create!(name: 'Everywhen', description: 'Everywhen is an Airtable and React build that serves as a self tracker for mental wellness ', img_url: 'https://i.imgur.com/oUsBCPN.png', deployed_url: 'https://everywhen.netlify.app/', stack: 'React', user: @daisy)
@p3 = Project.create!(name: 'Habanero Marketplace', description: 'A full stack online marketplace app for hot sauce enthusiasts. Users can create a unique user account that will allow them to create, read, edit, and delete items on the marketplace.', img_url: 'https://i.imgur.com/af3pNkH.png', deployed_url: 'https://habaneros-marketplace.netlify.app/', stack: 'React, Express, and MongoDB', user: @daisy)
@p4 = Project.create!(name: 'In Sequence', description: 'This app is a developer tool for tracking and organization. It allows users to keep track of their studies, projects, networking events, and job search.', img_url: 'https://i.imgur.com/0yAPhxX.png', deployed_url: 'https://www.insequence.com', stack: 'Ruby on Rails & React', user: @daisy)


puts "#{Project.count} projects created"

