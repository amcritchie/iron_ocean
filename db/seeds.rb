# $ rake db:drop db:create db:migrate db:seed

# Create Admin User
admin = User.create(
email: Figaro.env.admin_email, password: Figaro.env.admin_password, first_name: 'iron',
last_name: 'ocean', email_confirmed: true, active: true, last_active: nil, time_zone: 'mst',
image: Rails.root.join("app/assets/images/seed_images/iron_dragon.png").open
)
admin_address = admin.addresses.create(street: Figaro.env.admin_street, zip: Figaro.env.admin_zip, phone: Figaro.env.admin_phone)
Admin.create(user_id: admin.id, name: 'standard')

lock_of_the_week = Blog.create(
name: "Lock of the Week", slug: "lock_of_the_week", active: true,
image: Rails.root.join("app/assets/images/seed_images/iron_king.png").open)
urban_chef = Blog.create(
name: "Urban Chef", slug: "urban_chef", active: true,
image: Rails.root.join("app/assets/images/seed_images/iron_spearman.png").open)
angular_answers = Blog.create(
name: "Angular Answers", slug: "angular_answers", active: true,
image: Rails.root.join("app/assets/images/seed_images/iron_heavy_horse.png").open)

admin_urban_author = Author.create(user_id: admin.id, name: 'writer')
admin_answers_author = Author.create(user_id: admin.id, name: 'editor')

alex = User.create(
email: Figaro.env.user_email, password: Figaro.env.user_password, first_name: 'Alex',
last_name: 'McRitchie', email_confirmed: false, active: true, last_active: nil, time_zone: 'mst',
image: Rails.root.join("app/assets/images/seed_images/alex_mcritchie_1.jpg").open
)
alex_address = alex.addresses.create(street: Figaro.env.user_street, zip: Figaro.env.user_zip, phone: Figaro.env.user_phone)

patrick = User.create(
email: 'patrick@pierce.com', password: 'password1', first_name: 'Patrick',
last_name: 'Bateman', email_confirmed: false, active: false, last_active: nil, time_zone: 'est',
image: Rails.root.join("app/assets/images/seed_images/patrick_bateman.jpg").open
)
patrick_address = patrick.addresses.create(street: '358 exchange place', zip: '10022', phone: '2125556342')

# Message.create( sender_id: 1, receiver_id: 2, title: "Welcome to Iron Ocean",
Message.create( sender_id: admin.id, receiver_id: alex.id, title: "Welcome to Iron Ocean",
body: "Hello amcritchie@gmail.com, welcome to Iron Ocean.", unread: false)

Message.create( sender_id: alex.id, receiver_id: admin.id, title: "Thanks for the welcome",
body: "Thanks for the welcome, I cant wait to get stared.", unread: false)

Message.create( sender_id: admin.id, receiver_id: alex.id, title: "Welcome to Iron Ocean",
body: "Hello alexmcray@aol.com, welcome to Iron Ocean.", unread: false)

Message.create( sender_id: alex.id, receiver_id: patrick.id, title: "Hi, how is it going",
body: "Hi AlexMcRay, how are you?", unread: false)

Message.create(sender_id: patrick.id, receiver_id: alex.id, title: "RE Hi, how is it going",
body: "Im doing very well, how are you?", unread: false)

Message.create( sender_id: alex.id, receiver_id: patrick.id,title: "RE RE Hi, how is it going",
body: "Great, thanks for asking!", unread: false)

Message.create( sender_id: patrick.id, receiver_id: alex.id, title: "RE RE RE Hi, how is it going",
body: "How long have you lived in Denver?", unread: false)

Message.create( sender_id: alex.id, receiver_id: patrick.id, title: "RE RE RE RE Hi, how is it going",
body: "About 3 years now.  How about you?", unread: false)

Message.create( sender_id: patrick.id, receiver_id: alex.id, title: "RE RE RE RE REHi, how is it going",
body: "This is my first winter.", unread: false)

# Lock of the Week
Article.create(active: true, author_id: admin_urban_author.id, blog_id: lock_of_the_week.id, title: 'Lock of NFL 2016 Week 1', slug: 'nfl_2016_week_1')
# Angular Answers
Article.create(active: true, author_id: admin_urban_author.id, blog_id: angular_answers.id, title: 'Angularjs ui-router Firing Twice', slug: 'angular_js_ui_router_firing_twice')
Article.create(active: true, author_id: admin_urban_author.id, blog_id: angular_answers.id, title: 'Using .try() in Rails', slug: 'using_try_in_rails')
# Urban Chef
Article.create(active: true, author_id: admin_answers_author.id, blog_id: urban_chef.id, title: 'T-bone Steak On the Grill', slug: 't_bone_steak_on_the_grill',
body:
"<div>
\t<p>Start by warming up your grill in a two zone system, one half very hot and the other side on a low setting.</p>
</div>
<div>
\t<p>Remove your steak from the fridge and let it warm up for five minutes.</p>
</div>
<div>
\t<p>Trim the excess fat from around the steak.</p>
</div>
<div>
\t<p>Lightly salt and heavly pepper both sides of the steak.</p>
</div>
<div>
\t<p>Once your grill is good and hot, place the seasoned steak on the hot side and let it seer for two to three minutes.</p>
</div>
<div>
\t<p>Flip the steak and let the other side seer for two to three minutes.</p>
</div>
<div>
\t<p>Once both sides a seered, flip and move the steak to the low heat zone, and let it cook for 10 minutes.</p>
</div>
<div>
\t<p>Flip the steak and let the other side cook for another seven minutes.</p>
</div>
<div>
\t<p>Take of the grill and enjoy!</p>
</div>"
)

Article.create(active: true, author_id: admin_answers_author.id, blog_id: urban_chef.id, title: 'BBQ Frozen Pizza', slug: 'bbq_frozen_pizza',
body:
"<div>
\t<p>By a frozen pizza</p>
</div>
<div>
\t<p>Heat up your grill</p>
</div>
<div>
\t<p>Pop in the pizza.</p>
</div>")
