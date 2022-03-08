/* eslint-disable */

export default async (_, res) => {
  res.clearPreviewData();

  res.writeHead(307, { location: "/"});
  res.end();
};