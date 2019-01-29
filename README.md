## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:true|
|email|string|null: false, unique: true|
|password|string|null: false|

### Association
- has_many :massages
- has_many :groups, through:members
- has_many :members

## gropusテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|string|null: false|
|member_id|string|null: false, foreign_key: true|

### Association
- has_many :massages
- has_many :user, through:members
- has_mane :members
- accepts_nested_attributes_for :members
