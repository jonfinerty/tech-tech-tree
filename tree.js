var treeData =
[
  {
    "name": "Start Company",
    "parent": "null",
    "children": [
      {
        "name": "Buy Dev Machines",
        "parent": "Start Company",
        "children": [
          {
            "name": "Set up a VCS",
            "parent": "Buy Dev Machines"
          },
          {
            "name": "Manually Deploy Code",
            "parent": "Buy Dev Machines",
            "children": [
              {
                "name": "Write a script to deploy",
                "parent": "Manually Deploy Code",
                "children": [
                  {
                    "name": "Deploy from CI tool",
                    "parent": "Write a script to deploy"
                  }
                ]
              }
            ]
          },
          {
            "name": "Write Unit Tests",
            "parent": "Buy Dev Machines"
          },
          {
            "name": "Do code reviews",
            "parent": "Buy Dev Machines"
          }
        ]
      },
      {
        "name": "Write a todo",
        "parent": "Start Company",
        "children": [
          {
            "name": "Run sprints",
            "parent": "Write a todo"
          }
        ]
      }
    ]
  }
]