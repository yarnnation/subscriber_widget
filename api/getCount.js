module.exports = async function (req, res) {
  const tagId = "8241269";
  const apiKey = "kit_cbf4955f405118348d14c28eebac9c42";

  try {
    const resp = await fetch(`https://api.convertkit.com/v4/tags/${tagId}/subscriptions`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });

    const data = await resp.json();

    if (!resp.ok) return res.status(resp.status).json({ error: data });
    return res.status(200).json({ count: data.total_subscriptions });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
