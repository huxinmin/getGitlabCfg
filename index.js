const child_process = require("child_process");

const getCfg = ({
  token, host, projectId, src, branch, dist
}) => {
  const url = `${host}/api/v4/projects/${projectId}/repository/files/${encodeURIComponent(src)}/raw?ref=${branch}`;
  const curl = `curl --header PRIVATE-TOKEN:${token} ${url} -o ${dist}`

  child_process.exec(curl, function (err, stdout) {
    if (err) throw new Error(err)
    console.log(stdout);
  });
}

module.exports = getCfg;
