var $projectList = $(".list-container .list-group");

var getProjects = function() {
  return $.ajax({
    url: "/api/portfolio",
    method: "GET"
  });
};

// Render's the list of note titles
var renderProjectList = function(projects) {
  $projectList.empty();

  var projectListItems = [];

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    var $div = $("<div class='list-group-item'>").data(project);
    var $projectName = $("<h1 class='projectName'>").text(project.name);
    var $projectImage = $("<img class='project-image' src='/images/' ''>").text(
      project.image
    );
    var $projectDescription = $("<h3 class='project-description'>").text(
      project.description
    );
    var $projectHeroku = $(
      "<span class='project-links'><a href='' title='go to Heroku APP'><img class='icon' src='./images/heroku.png'  alt='heroku'></a></span>"
    );
    var $projectGithub = $(
      "<span class='project-links'><a href='' title='go to Github repo'> <img class='icon' src='./images/github.png'  alt='github'>"
    ).text(project.github);

    $div.append(
      $projectImage,
      $projectName,
      $projectDescription,
      $projectHeroku,
      $projectGithub
    );
    projectListItems.push($div);
  }

  $projectList.append(projectListItems);
};

// Gets notes from the db and renders them to the sidebar
var getAndRenderProjects = function() {
  return getProjects().then(function(data) {
    renderProjectList(data);
  });
};

getAndRenderProjects();
