# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ActiveRecord::Base
  has_many :songs
end
