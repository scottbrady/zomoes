class Resume
    include MongoMapper::Document

    key :first_name, String
    key :last_name,  String
    key :city,       String
    key :state,      String
    key :summary,    String
end