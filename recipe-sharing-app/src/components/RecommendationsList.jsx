import React from 'react'
import { useRecipeStore } from './recipeStore'


const RecommendationsList = () => {
const recommendations = useRecipeStore(state => state.recommendations)


if (!recommendations || recommendations.length === 0) return <div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>No recommendations yet.</div>


return (
<div style={{ background: '#fff', padding: 12, borderRadius: 8 }}>
<h3>Recommendations</h3>
{recommendations.map(r => (
<div key={r.id} style={{ padding: 8 }}>
<strong>{r.title}</strong>
<div style={{ fontSize: 13 }}>{r.description}</div>
</div>
))}
</div>
)
}


export default RecommendationsList