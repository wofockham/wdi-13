Artist.destroy_all
Artist.create(:name => 'Joan Miro', :nationality => 'Spanish', :dob => '1893/04/20', :period => '20th century', :image => 'http://upload.wikimedia.org/wikipedia/commons/5/5c/Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg')

Work.destroy_all
Work.create(:title => 'The Flight of the Dragonfly in Front of the Sun', :year => '1968', :medium => 'oil on canvas', :style => 'Abstract Art', :image => 'http://41.media.tumblr.com/6b293aea7473596f536e145b957b2cd4/tumblr_mzrwc18h3b1qzu1hko1_1280.jpg')
