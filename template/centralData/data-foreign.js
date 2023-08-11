module.exports = {
    "model": {
        "projectName": "学校-dome",
        "backLanguage": "node",
        "db": "mysql",
        "tableList": [
            {
                "tableName": "school",
                "columns": [
                    {
                        "columnName": "school_name",
                        "type": "string",
                        "comment": "学校名称",
                        "isSearch": true,
                        "unique": true,
                        "required": {
                            "isTrue": true,
                            "message": "请输入学校名称" //如果没有则输出school_name是必填
                        }
                    }
                ],
                "foreigns": []
            },
            {
                "tableName": "classes",
                "columns": [
                    {
                        "columnName": "classes_name",
                        "type": "string",
                        "comment": "班级名称",
                        "isSearch": true,
                        "unique": true,
                        "required": {
                            "isTrue": true,
                            "message": "请输入班级名称" //如果没有则输出classes_name是必填
                        }
                    }
                ],
                "foreigns": [
                    {
                        "required": {
                            "isTrue": true,
                            "message": "学校为必填"
                        },
                        "relationship": "manyToOne",
                        "relationTable": "school"
                    }
                ]
            },
            {
                "tableName": "teacher",
                "columns": [
                    {
                        "columnName": "teacher_name",
                        "type": "string",
                        "comment": "老师名称",
                        "isSearch": true,
                        "unique": true,
                        "required": {
                            "isTrue": true,
                            "message": "请输入老师名称" //如果没有则输出teacher_name是必填
                        }
                    }
                ],
                "foreigns": [
                    {
                        "required": {
                            "isTrue": true,
                            "message": "班级为必填"
                        },
                        "relationship": "manyToMany",
                        "relationTable": "teacher"
                    },
                    {
                        "required": {
                            "isTrue": true,
                            "message": "工位为必填"
                        },
                        "relationship": "oneToOne",
                        "relationTable": "station"
                    }
                ]
            },
            {
                "tableName": "station",
                "columns": [
                    {
                        "columnName": "station_number",
                        "type": "string",
                        "comment": "工位编号",
                        "isSearch": true,
                        "unique": true,
                        "required": {
                            "isTrue": true,
                            "message": "请输入工位编号" //如果没有则输出station_number是必填
                        }
                    }
                ],
                "foreigns": []
            }
        ]
    }
}

