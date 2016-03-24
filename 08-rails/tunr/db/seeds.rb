User.destroy_all
u1 = User.create :email => 'craigsy@ga.co', :password => 'chicken', :password_confirmation => 'chicken'
u2 = User.create :email => 'jonesy@ga.co', :password => 'chicken', :password_confirmation => 'chicken'

Song.destroy_all
s1 = Song.create :name => 'All By Electricity'
s2 = Song.create :name => 'Marianas Trench'
s3 = Song.create :name => 'Have A Safe Trip Dear'

Album.destroy_all
a1 = Album.create :name => 'Engine Takes To The Water'
a2 = Album.create :name => 'From The Vapor Of Gasoline'
a3 = Album.create :name => 'Systems/Layers'

a1.songs << s1
a2.songs << s2
a3.songs << s3

Artist.destroy_all
r1 = Artist.create :name => 'June Of 44'
r2 = Artist.create :name => 'The Mercury Program'
r3 = Artist.create :name => 'Rachels'

r1.songs << s1
r2.songs << s2
r3.songs << s3

Genre.destroy_all
g1 = Genre.create :name => 'Nautical Text Rock'
g2 = Genre.create :name => 'Math Rock'
g3 = Genre.create :name => 'Chamber Pop'

g1.songs << s1
g2.songs << s2
g3.songs << s3

Mixtape.destroy_all
m1 = Mixtape.create :title => 'Make Out Music'
m2 = Mixtape.create :title => 'Easter Tunes'
m3 = Mixtape.create :tite => 'Code Jams'

u1.mixtapes << m1 << m2
u2.mixtapes << m3

m1.songs << s1 << s2 << s3
m2.songs << s2 << s3
m3.songs << s1
