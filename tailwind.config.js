module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': 'var(--color-near-black)',
            '--tw-prose-headings': 'var(--color-near-black)',
            '--tw-prose-lead': 'var(--color-navy)',
            '--tw-prose-links': 'var(--color-navy)',
            '--tw-prose-bold': 'var(--color-near-black)',
            '--tw-prose-counters': 'var(--color-near-black)',
            '--tw-prose-bullets': 'var(--color-near-black)',
            '--tw-prose-hr': 'var(--color-grey)',
            '--tw-prose-quotes': 'var(--color-near-black)',
            '--tw-prose-quote-borders': 'var(--color-grey)',
            '--tw-prose-captions': 'var(--color-grey)',
            '--tw-prose-code': 'var(--color-near-black)',
            '--tw-prose-pre-code': 'var(--color-near-black)',
            '--tw-prose-pre-bg': 'var(--color-grey)',
            '--tw-prose-th-borders': 'var(--color-grey)',
            '--tw-prose-td-borders': 'var(--color-grey)',
            a: {
              fontWeight: '600',
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            ul: {
              listStyle: 'square',
            }
          },
        },
        white: {
          css: {
            '--tw-prose-body': 'white',
            '--tw-prose-headings': 'white',
            '--tw-prose-lead': 'white',
            '--tw-prose-links': 'var(--color-mint)',
            '--tw-prose-bold': 'white',
            '--tw-prose-counters': 'white',
            '--tw-prose-bullets': 'white',
            '--tw-prose-hr': 'var(--color-mint)',
            '--tw-prose-quotes': 'white',
            '--tw-prose-quote-borders': 'var(--color-grey)',
            '--tw-prose-captions': 'var(--color-grey)',
            '--tw-prose-code': 'white',
            '--tw-prose-pre-code': 'white',
            '--tw-prose-pre-bg': 'var(--color-grey)',
            '--tw-prose-th-borders': 'var(--color-grey)',
            '--tw-prose-td-borders': 'var(--color-grey)',
          },
        },
      },
    },
  },
}