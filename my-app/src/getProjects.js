const covers    = import.meta.glob('./assets/projects/*/cover.png', { eager: true })
const metas     = import.meta.glob('./assets/projects/*/meta.json', { eager: true })
const allImages = import.meta.glob('./assets/projects/*/*.{png,jpg,jpeg,webp,svg}', { eager: true })

export function getProjects() {
    const projects = Object.entries(covers).map(([path, module]) => {
        const id = path.split('/')[3]
        const meta = metas[`./assets/projects/${id}/meta.json`]?.default ?? {}
        const images = Object.entries(allImages)
            .filter(([p]) => p.startsWith(`./assets/projects/${id}/`) && !p.endsWith('cover.png'))
            .sort(([a], [b]) => a.localeCompare(b))
            .map(([, m]) => m.default)
        return {
            id,
            cover: module.default,
            title: meta.title ?? id,
            date: meta.date ?? '',
            caption: meta.caption ?? '',
            images,
        }
    }).sort((a, b) => a.date.localeCompare(b.date))
    return projects
}
