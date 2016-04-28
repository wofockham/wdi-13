# == Schema Information
#
# Table name: shelves
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Shelf, type: :model do
  it { should have_many(:fruits) }
end
