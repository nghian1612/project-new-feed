cách push lên nhánh của mình
- tạo nhánh mới : 
    -   git branch "namebranch"
- chuyển đến nhánh mình vừa tạo:
    - git checkout "namebranch" --> namebranch == tên vừa đặt
 ** có thể gộp hai lệnh trên bằng lệnh :
    - git checkout -b "namebranch"
- Commit:
    1. git add --all --> add tất cả những gì mình đã sữa
    3. git status --> kiểm tra đã add vào chưa
    2. git commit -m "message" --> message là nội dung mà ta sửa
    ** nếu lệnh trên báo lỗi về syntax thì sử dụng lệnh : git commit -n -m "mes....." --> -n == nô đì phai >< 
- Push,Pull :
    1. Push : đẩy những commit vừa nãy lên trên github 
        - git push origin namebranch
    2. pull : kéo về những gì ở trên github hiện tại 
****