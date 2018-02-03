<%@ Page Language="C#" %>

<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>This is a test</title>
    <link href="https://cdn.bootcss.com/semantic-ui/2.2.13/semantic.min.css" rel="stylesheet">
</head>
<body ng-app="questionnaire">

    <div ui-view="header"></div>

    <div ui-view class="ui container" style="padding-top:2rem"></div>

    <script src="https://cdn.bootcss.com/jquery/1.10.2/jquery.min.js"></script>
    <script src="https://cdn.bootcss.com/semantic-ui/2.2.13/semantic.min.js"></script>

    <script src="https://cdn.bootcss.com/angular.js/1.6.4/angular.min.js"></script>
    <script src="https://cdn.bootcss.com/angular.js/1.6.4/angular-resource.min.js"></script>
    <script src="https://cdn.bootcss.com/angular-ui-router/1.0.3/angular-ui-router.min.js"></script>
    <script src="scripts/angular-ui-semantic/ui-semantic.js?version=<%=DateTime.Now.ToString("yyyyMMddHHmmss") %>"></script>

    <script src="scripts/questionnaire.min.js?version=<%=DateTime.Now.ToString("yyyyMMddHHmmss") %>"></script>

    <script src="scripts/route.js?version=<%=DateTime.Now.ToString("yyyyMMddHHmmss") %>"></script>
    <script src="scripts/app.js?version=<%=DateTime.Now.ToString("yyyyMMddHHmmss") %>"></script>

    <script>
        window.version = <%=DateTime.Now.ToString("yyyyMMddHHmmss") %>;
    </script>
</body>
</html>
