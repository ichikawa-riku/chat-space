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
|member_id|string|null: false, foreign_key: true|
|name|string|null: false|
|member_id|string|null: false|

### Association
- has_many :massages
- has_many :user, through:members
- has_mane :members
- accepts_nested_attributes_for :members

## massagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: true|
|image|string|null: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

