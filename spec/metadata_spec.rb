require 'aspaceiiif/metadata'

describe ASpaceIIIF::Metadata do
  let(:metadata) { ASpaceIIIF::Metadata.new('1596') }

  describe "#handle" do
    it "returns a handle URI" do
      expect(metadata.handle).to include("hdl.handle.net")
    end
  end

  describe "#rights_statement" do
    it "returns a string" do
      expect(metadata.rights_statement).to be_instance_of(String)
      expect(metadata.rights_statement.length).to be > 0
    end
  end

  describe "#title" do
    it "returns a string" do
      expect(metadata.title).to be_instance_of(String)
      expect(metadata.title.length).to be > 0
    end
  end

    describe "#host_title" do
    it "returns a string" do
      expect(metadata.host_title).to be_instance_of(String)
      expect(metadata.host_title.length).to be > 0
    end
  end

  describe "#component_id" do
    it "returns a BC or MS number" do
      expect(metadata.component_id).to be_instance_of(String)
      expect(metadata.component_id.include?("BC") || metadata.component_id.include?("MS")).to be true
    end
  end
end