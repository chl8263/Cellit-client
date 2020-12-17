Cellit client
=============
### The related program

:chart_with_upwards_trend: Api-server : [Cellit Api-server](https://github.com/chl8263/Cellit-api-server)

:rocket: Purpose of program
-------------
'Cellit' is Abbreviation of 'cell unit'.

__The Cellit concepts__ is Cell provide individual space and guarantee communication for joined each user.

Manager of cell can manage about channel and users. Forexample reject for requested join specific cell or terminate user and channel.

Release 1.0 version is focus on overall structure.


:factory: Program structure
-------------

### Technology set

|Technical Name|Value|
|:---:|:---:|
|Language|[Javascript es6](https://javascript.info/)|
|Framework|[React](https://reactjs.org/)|
|State Management|[Redux](https://github.com/reduxjs/redux)|
|Ui Framework|[Bootstrap](https://getbootstrap.com/)|
<br/>

![structrue](./img/structure.PNG)

In order to request Api on client need to put JWT token on 'Authorization' of http header.
__Client get JWT token at login and save JWT state at REDUX.__


<br/>

### Response as HAL - Hypertext Application Language

Every response of request has body based on `HAL - Hypertext Application Language`.
So this client active use of HAL link provided by server.
~~~
{
    "_embedded": {
        "channelPostEntityModelList": [
            {
                "channelPostId": 3,
                "channelPostName": "test2",
                "accountId": 1,
                "accountName": "ewan",
                "viewCount": 0,
                "createDate": "2020-12-10.03:55:01",
                "modifyDate": "2020-12-10.03:55:01",
                "active": 1,
                "_links": {
                    "self": {
                        "href": "http://localhost:8081/api/channels/1/channelPosts/3"
                    }
                }
            },
            {
                "channelPostId": 2,
                "channelPostName": "test2",
                "accountId": 1,
                "accountName": "ewan",
                "viewCount": 0,
                "createDate": "2020-12-10.02:49:43",
                "modifyDate": "2020-12-10.02:49:43",
                "active": 1,
                "_links": {
                    "self": {
                        "href": "http://localhost:8081/api/channels/1/channelPosts/2"
                    }
                }
            },
        ]
    },
    "_links": {
        "self": {
            "href": "http://localhost:8081/api/channels/1/channelPosts?postNameToSearch=&page=0&size=10&sort=createDate,desc"
        }
    },
    "page": {
        "size": 10,
        "totalElements": 3,
        "totalPages": 1,
        "number": 0
    }
}
~~~

<br/>

:hammer: Working with Cellit in your IDE
-------------

### Prerequisites

The following items should be installed in your setting:

* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/)
* Your preferred IDE
    * [VS Code](https://code.visualstudio.com/)

### Steps:
1. On the command line
    ~~~
    https://github.com/chl8263/Cellit-client.git
    ~~~

2. Open Terminal on the directory and put The code below in order.
    ~~~shell
    npm run build

    npm install
    ~~~
3. Run this project.
    ~~~shell
    npm run dev
    ~~~

<br/>

:computer: UI Function
-------------

### Signup

![sign_up](./img/sign_up.PNG)

### Login

![login](./img/login.PNG)

~~~
Client request JWT Token about specific account and try to login to Api server
~~~


### Mainboard

![mainboard](./img/mainboard.PNG)

### create_new

![create_new](./img/create_new.PNG)

![mainboard_in_item1](./img/mainboard_in_item1.PNG)

![mainboard_notification](./img/mainboard_notification.PNG)

![mainboard_profile](./img/mainboard_profile.PNG)

### search_cell

![search_cell](./img/search_cell.PNG)

![search_cell_not_joined](./img/search_cell_not_joined.PNG)

### cell_unit

![cell_unit](./img/cell_unit.PNG)


### channel

![channel](./img/channel.PNG)

![channel_content](./img/channel_content.PNG)

![channel_content_modify](./img/channel_content_modify.PNG)

![channel_content_pagination](./img/channel_content_pagination.PNG)

### channel

![channel_setting](./img/channel_setting.PNG)

![setting_request_account_accept](./img/setting_request_account_accept.PNG)

![setting_request_account_reject](./img/setting_request_account_reject.PNG)

![setting_manage_channels](./img/setting_manage_channels.PNG)

![setting_manage_users](./img/setting_manage_users.PNG)

