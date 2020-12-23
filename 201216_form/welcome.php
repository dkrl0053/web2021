<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form</title>
</head>
<body>
    <?
    $na = $_GET["na"];
    $email = $_GET["email"]; 
    ?>

    <p>
        이름 : <? echo $na; ?>
    </p>
    <p>
        이메일 : <? echo $email; ?>
    </p>
</body>
</html>