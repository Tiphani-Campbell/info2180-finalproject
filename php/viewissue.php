<?php
    $issue_id = strip_tags($_GET['issue_id']);

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = 'bugme';


    $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $stmt = $conn->query("SELECT * FROM issues WHERE id='$issue_id'");
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $issueTitle = $results[0]['title'];
    $issueDesc = $results[0]['description'];
    $issueType = $results[0]['type'];
    $issuePri = $results[0]['priority'];
    $issueStat = $results[0]['status'];
    $issueAss = $results[0]['assigned_to'];
    $issueCreBy = $results[0]['created_by'];
    $issueCre = $results[0]['created'];
    $issueUpd = $results[0]['updated'];

    ?>

    <h1><div id="issue-title"> <?= $issueTitle ?> </div></h1><!--issue title goes here-->
    <h3><div id="issue-id"> Issue# <?= $issue_id ?> </div></h3><!--issue id goes here-->
    <div id="issue-description"> <?= $issueDesc ?> </div><!--issue description goes here-->
    <ul>
        <li><div id="last-created"> Issue created on  <?= $issueCre ?> by <?= $issueCreBy ?> </div></li><!--last created information goes here-->
        <li><div id="last-updated"></div> Issue last updated on  <?= $issueUpd ?> </li><!--last updated information goes here-->
    </ul>


    <div class="issue-info">
        <h3>Assigned To:</h3>
        <div id="assigned-info"> <?= $issueAss ?> </div> <!--assigned to info goes here-->

        <h3>Type:</h3>
        <div id="type-info"> <?= $issueType ?> </div> <!--issue type info goes here-->

        <h3>Priority:</h3>
        <div id="prority-info"> <?= $issuePri ?> </div> <!--issue priority goes here-->

        <h3>Status:</h3>
        <div id="status-info"> <?= $issueStat ?> </div> <!--issue status goes here-->

    </div>