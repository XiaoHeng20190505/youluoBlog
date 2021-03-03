# git 所有命令全部小写

# 首次拉取 git 仓库的项目
    进入 git 网页，找到 git 路径，复制
    在想要存放文件的空白处 右击 -> 找到 Git Bash Here -> 输入命令: git clone gitURL
# 提交代码
    1 git pull          拉取最新的代码
    2 git add .         提交所有更新过文件，将文件提交到仓库的缓存中
    3 git status        查看 git 状态。此时可以看到已经提交到缓存中的文件列表
    4 git commit -m ''  输入更新的注释
    5 git push          将提交到缓存中的内容更新到仓库中
    6 git pull          拉取最新的代码