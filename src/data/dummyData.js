export const sections = [
    {
        id: 1,
        name: 'Executive Summary',
        icon: 'custDetails',
        expandable: false,
        formData: [
            {
                name: 'Compass Case No.',
                type: 'text',
                value: '119459',
            },
            {
                name: 'Scenario(s) Breached',
                type: 'text',
                value: '1',
            },
            {
                name: 'Description of Breached Scenario(s)',
                type: 'textarea',
                value: 'CASH_DEP_CAA_DAILY_L',
            },
            {
                name: 'Is Bank Employee',
                type: 'radio',
                value: 'Yes',
                options: ['Yes', 'No', 'Unknown'],
            },
        ],
        summaryDetails: [
            'CASH_DEP_CAA_DAILY_1',
            'KUSUM BALA W/O ASHOK KUMAR',
            '50230100000133',
            '1',
            '1',
            'does not have',
            'High',
        ],
        header: true,
        type: 'header',
        hasForm: true,
        hasGraph: false,
        graph: null,
        graphList: null,
    },

    {
        id: 2,
        name: 'Customer Details (KYC)',
        icon: 'custDetails',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        formData: [
            {
                name: 'Customer Name',
                type: 'text',
                value: 'Burhanuddin Patrawala',
            },
            {
                name: 'Customer Risk Rating',
                type: 'text',
                value: 'High',
            },
            {
                name: 'Account Risk Rating',
                type: 'text',
                value: 'Medium',
            },
            {
                name: 'Customer Type',
                type: 'text',
                value: 'VVIP',
            },
            {
                name: 'KYC last Update Date',
                type: 'text',
                value: '11/08/2022',
            },
            {
                name: 'Occupation',
                type: 'text',
                value: 'Minister',
            },
            {
                name: 'Nature Of Business',
                type: 'text',
                value: 'Heavy Transport',
            },
        ],
        graph: null,
        graphList: null,
    },

    {
        id: 3,
        name: 'Real-Time Screening',
        icon: 'rtScreening',
        expandable: true,
        type: 'component',
        componentType: 'rtScreening',
        hasGraph: true,
        hasForm: true,
        formData: [
            {
                name: 'Name',
                value: 'Burhanuddin Patrawala',
                type: 'text',
            },
            {
                name: 'Other Names',
                value: '',
                type: 'text',
            },
            {
                name: 'Date of Birth',
                value: '',
                type: 'date',
            },
            {
                name: 'Account Number',
                value: '502301000000133',
                type: 'text',
            },
            {
                name: 'Customer ID',
                value: '610358304',
                type: 'text',
            },
            {
                name: 'Passport Number',
                value: '',
                type: 'text',
            },
            {
                name: 'Tax ID Number',
                value: '',
                type: 'text',
            },
            {
                name: 'Aadhaar Number',
                value: '',
                type: 'text',
            },
            {
                name: 'Voter ID Number',
                value: '',
                type: 'text',
            },
            {
                name: 'PAN Number',
                value: '',
                type: 'text',
            },
            {
                name: 'Address',
                value: '',
                type: 'textarea',
            },
        ],
        hasTable: false,
        graph: 'PIE',
        graphList: ['PIE'],
    },

    {
        id: 4,
        name: 'Transaction Details',
        icon: 'transaction',
        expandable: true,
        type: 'graph',
        hasGraph: true,
        hasForm: false,
        hasTable: true,
        graph: 'PIE',
        grpahList: ['PIE'],
    },

    {
        id: 5,
        name: 'Alert Details',
        icon: 'actionItem',
        expandable: true,
        type: 'text',
        hasGraph: false,
        hasForm: false,
        hasTable: true,
        graph: null,
        graphList: null,
        sectionData: [],
    },

    {
        id: 6,
        name: 'Account Profile (Past 6 months)',
        icon: 'accountProfile',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasForm: true,
        hasTable: false,
        graph: null,
        formData: [
            {
                name: 'Products Used',
                type: 'text',
                value: 'SB112',
            },
            {
                name: 'Total Debit',
                type: 'text',
                value: '0',
            },
            {
                name: 'Total Debit Count',
                type: 'text',
                value: '0',
            },
            {
                name: 'Total Credit',
                type: 'text',
                value: '24000',
            },
            {
                name: 'Total Credit Count',
                type: 'text',
                value: '12',
            },
            {
                name: 'Account Risk',
                type: 'text',
                value: 'High',
            },
            {
                name: 'Risk last changed',
                type: 'date',
                value: '18/01/2013',
            },
            {
                name: 'Last 5 Account Activities',
                type: 'textarea',
                value: '',
            },
            {
                name: 'Past CTR or SR or other Regulatory Reports in this account/customer',
                type: 'radio',
                value: 'No',
                options: ['Yes', 'No'],
            },
            {
                name: 'If Yes, Count',
                type: 'text',
                value: '',
            },
            {
                name: 'If Yes, Date',
                type: 'date',
                value: '',
            },
        ],
    },

    {
        id: 7,
        name: 'Links',
        icon: 'links',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        formData: [
            {
                name: 'From Date',
                type: 'text',
                value: '11/08/2022',
            },
            {
                name: 'To Date',
                type: 'text',
                value: '18/08/2022',
            },
            {
                name: 'Account No.',
                type: 'text',
                value: '303353508742',
            },
            {
                name: 'Level Count',
                type: 'text',
                value: '5',
            },
        ],
        graph: null,
        graphList: null,
    },

    {
        id: 8,
        name: 'Past History',
        icon: 'pastHistory',
        expandable: true,
        type: 'graph',
        hasGraph: true,
        hasFrom: false,
        hasTable: false,
        graph: 'SCATTER',
        graphList: ['SCATTER'],
    },

    {
        id: 9,
        name: 'Related Parties',
        icon: 'relatedParties',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        formData: [
            {
                name: 'Lorem Ipsum',
                type: 'text',
                value: '',
            },
            {
                name: 'Lorem Ipsum',
                type: 'text',
                value: '',
            },
            {
                name: 'Lorem Ipsum',
                type: 'text',
                value: '',
            },
            {
                name: 'Lorem Ipsum',
                type: 'text',
                value: '',
            },
        ],
        graph: null,
        graphList: null,
    },

    {
        id: 10,
        name: 'Ringside View',
        icon: 'ringsideView',
        expandable: true,
        type: 'graph',
        hasGraph: true,
        hasForm: false,
        hasTable: false,
        graph: 'BAR3D',
        graphList: ['PIE', 'PIE', 'BAR'],
        summaryDetails: ['', '', '', ''],
    },

    {
        id: 11,
        name: 'Customer Case History',
        icon: 'summaryDetails',
        expandable: true,
        type: 'table',
        hasGraph: false,
        hasFrom: false,
        hasTable: true,
        graph: null,
        graphList: null,
    },

    {
        id: 12,
        name: 'Email Exchange',
        icon: 'email',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        formData: [
            {
                name: 'Compose',
                type: 'button',
                function: 'modal',
                modalType: 'compose',
                value: 'Compose',
            },
            {
                name: 'Inbox',
                type: 'button',
                function: 'modal',
                modalType: 'inbox',
                value: 'Inbox (12 Unread)',
            },
            {
                name: 'Sent',
                type: 'button',
                function: 'sent',
                value: 'Sent',
            },
        ],
        graph: null,
        graphList: null,
    },

    {
        id: 13,
        name: 'View Comment For Case',
        icon: 'viewComments',
        expandable: true,
        type: 'text',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        graph: null,
        graphList: null,
        sectionData: [
            'System - 121012 - 11/May/2022 08:08',
            'System - 121012 - 11/May/2022 08:08',
            'AMLUser - 121012 - 11/May/2022 08:08',
            'AMLUser - 121012 - 11/May/2022 08:08',
            'AMLUser - 121012 - 11/May/2022 08:08',
            'AMLUser - 121012 - 11/May/2022 08:08',
        ],
    },
    {
        id: 14,
        name: 'Add/View EDD',
        icon: 'viewEdd',
        expandable: true,
        type: 'form',
        hasGraph: false,
        hasFrom: true,
        hasTable: false,
        formData: [
            {
                name: 'addEdd',
                type: 'button',
                function: 'addEdd',
                value: 'Add EDD',
            },
            {
                name: 'viewEdd',
                type: 'button',
                function: 'viewEdd',
                value: 'View EDD',
            },
        ],
        graph: null,
        graphList: null,
    },

    {
        id: 15,
        name: 'View Attach Case Evidence',
        icon: 'attach',
        expandable: true,
        type: 'upload',
        hasGraph: false,
        hasFrom: false,
        hasTable: false,
        graph: null,
        graphList: null,
    },
]

export const pages = [
    {
        id: 1,
        title: 'ViewSTR',
        menu: [
            'Indian STR - ARF',
            'Indian STR - TRF',
            'SL STR',
            'UK SAR',
            'Maldives STR',
            'Nepal STR',
            'Seychelies STR',
            'Singapore STR',
            'USA SAR',
            'Kenya SAR',
            'Maurite STR',
            'Zambie STR',
        ],
    },
    {
        id: 2,
        title: 'Button 2',
        menu: ['SubButton1', 'SubButton2', 'SubButton3'],
    },
    {
        id: 3,
        title: 'Button 3',
        menu: ['SubButton1', 'SubButton2', 'SubButton3'],
    },
]

export const chartConfig = [
    {
        type: 'SCATTER',
        option: {
            title: {
                text: 'Top Performing Securities',
                subtext: 'September 2019',
            },
            xAxis: {},
            yAxis: {},
            tooltip: {
                position: 'top',
            },
            series: [
                {
                    symbolSize: 10,
                    data: [
                        [10.0, 8.04],
                        [8.07, 6.95],
                        [13.0, 7.58],
                        [9.05, 8.81],
                        [11.0, 8.33],
                        [14.0, 7.66],
                        [13.4, 6.81],
                        [10.0, 6.33],
                        [14.0, 8.96],
                        [12.5, 6.82],
                        [9.15, 7.2],
                        [11.5, 7.2],
                        [3.03, 4.23],
                        [12.2, 7.83],
                        [2.02, 4.47],
                        [1.05, 3.33],
                        [4.05, 4.96],
                        [6.03, 7.24],
                        [12.0, 6.26],
                        [12.0, 8.84],
                        [7.08, 5.82],
                        [5.02, 5.68],
                    ],
                    type: 'scatter',
                },
            ],
        },
    },
    {
        type: 'PIE',
        option: {
            tooltip: {
                trigger: 'item',
            },
            legend: {
                top: '5%',
                left: 'center',
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center',
                    },
                    //   emphasis: {
                    //       label: {
                    //           show: true,
                    //           fontSize: '40',
                    //           fontWeight: 'bold',
                    //       },
                    //   },
                    labelLine: {
                        show: false,
                    },
                    data: [
                        {
                            value: 750,
                            name: 'Search Engine',
                            itemStyle: {
                                color: '#ffc600',
                            },
                        },
                        {
                            value: 750,
                            name: 'Direct',
                            itemStyle: {
                                color: '#65d8cc',
                            },
                        },
                        {
                            value: 750,
                            name: 'Email',
                            itemStyle: {
                                color: '#313679',
                            },
                        },
                    ],
                },
            ],
        },
    },
    {
        type: 'BAR',
        option: {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017', '2018', '2019'],
                    ['Matcha Latte', 43.3, 85.8, 93.7, 81.3, 75],
                    ['Milk Tea', 83.1, 73.4, 55.1, 61, 24],
                ],
            },
            xAxis: { type: 'category' },
            yAxis: {},
            barWidth: 10,
            barGap: '90%',
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#313679',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#65d8cc',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#ffc600',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#65d8cc',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#ffc600',
                    },
                },
            ],
        },
    },
    {
        type: 'BAR3D',
        option: {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017', '2018', '2019'],
                    ['Matcha Latte', 43.3, 85.8, 93.7, 81.3, 75],
                    ['Milk Tea', 83.1, 73.4, 55.1, 61, 24],
                ],
            },
            xAxis: { type: 'category' },
            yAxis: {},
            barWidth: 10,
            barGap: '90%',
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#313679',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#65d8cc',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#ffc600',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#65d8cc',
                    },
                },
                {
                    type: 'bar',
                    itemStyle: {
                        color: '#ffc600',
                    },
                },
            ],
        },
    },
]

export const tableData = {
    HEADER: [
        'CASENO',
        'DESCRIPTION',
        'CUSTOMERID',
        'CUSTOMERNAME',
        'USERCODE',
        'AMLUSERCODE',
        'AMLOUSERCODE',
        'MLROUSERCODE',
        'USERCOMMENTS',
        'AMLUSERCOMMENTS',
        'AMLOCOMMENTS',
        'MLROCOMMENTS',
        'USERTIMESTAMP',
        'AMLUSERTIMESTAMP',
        'AMLOTIMESTAMP',
        'MLROTIMESTAMP',
    ],
    DATA: [
        [
            '119955',
            null,
            '201077902',
            'K. K. BANSAL',
            'BranchUser',
            'AMLUSER',
            null,
            null,
            null,
            null,
            null,
            null,
            '26/09/2020',
            '26/09/2020',
            null,
            null,
        ],
        [
            '119948',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '07/08/2020',
            '07/08/2020',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '169863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '129863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119263',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '114863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
        [
            '119863',
            null,
            '201077902',
            'K. K. BANSAL',
            'SYSTEM',
            'AMLUser',
            null,
            null,
            null,
            null,
            null,
            null,
            '08/05/2018',
            '08/05/2018',
            null,
            null,
        ],
    ],
}


export const sectionData = {
    sectionsData: {
      sectionDetails: {
        section1: {
          id: 1,
          name: "Customer Details (KYC)",
          icon: "custDetails",
          expandable: "true",
          type: "form",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "text",
              name: "KYC_CUSTOMER_NAME",
              label: "CUSTOMER NAME",
              options: null,
              value: "RAJ RANI W/O SURESH"
            },
            {
              index: 2,
              inputType: "text",
              name: "KYC_FATHER_NAME",
              label: "FATHER NAME",
              options: null,
              value: " "
            },
            {
              index: 3,
              inputType: "text",
              name: "KYC_MOTHER_NAME",
              label: "MOTHER NAME",
              options: null,
              value: " "
            },
            {
              index: 4,
              inputType: "text",
              name: "KYC_ACCOUNT_NO",
              label: "ACCOUNT NUMBER",
              options: null,
              value: "ALL"
            },
            {
              index: 5,
              inputType: "text",
              name: "KYC_ASSOCIATED_ACC_NOS",
              label: "ASSOCIATED ACCOUNTS :(IF ANY)",
              options: null,
              value: "50230100001277"
            },
            {
              index: 6,
              inputType: "text",
              name: "KYC_BRANCH_NAME",
              label: "BASE BRANCH",
              options: null,
              value: "5023"
            },
            {
              index: 7,
              inputType: "text",
              name: "KYC_ACCOUNT_TYPE",
              label: "TYPE OF ACCOUNT",
              options: null,
              value: null
            },
            {
              index: 8,
              inputType: "text",
              name: "KYC_CUST_RISKRATING",
              label: "RISK RATING OF CUSTOMER",
              options: null,
              value: "MEDIUM"
            },
            {
              index: 9,
              inputType: "text",
              name: "KYC_ACC_RISKRATING",
              label: "RISK RATING OF ACCOUNT",
              options: null,
              value: null
            },
            {
              index: 10,
              inputType: "text",
              name: "KYC_RELPARTY_RISKRATING",
              label: "RISK RATING OF RELATED PARTIES",
              options: null,
              value: null
            },
            {
              index: 11,
              inputType: "date",
              name: "KYC_LAST_UPDATE",
              label: "KYC LAST UPDATE DATE",
              options: null,
              value: null
            },
            {
              index: 12,
              inputType: "date",
              name: "KYC_LAST_CHANGE",
              label: "KYC LAST CHANGE DATE",
              options: null,
              value: "18/01/2013"
            },
            {
              index: 13,
              inputType: "text",
              name: "KYC_GURDIAN",
              label: "GUARDIAN",
              options: null,
              value: null
            },
            {
              index: 14,
              inputType: "text",
              name: "KYC_NOMINEE",
              label: "NOMINEE",
              options: null,
              value: null
            },
            {
              index: 15,
              inputType: "text",
              name: "KYC_OTHER_RELATIONSHIP",
              label: "OTHER RELATIONSHIPS",
              options: null,
              value: null
            },
            {
              index: 16,
              inputType: "button",
              label: "Customer 360",
              function: "modal",
              modalDetails: {
                moduleType: "customer360",
                modalData: "/api/roboscanapi/searchCustomer360Data"
              },
              value: null
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section2: {
          id: 2,
          name: "Real-Time Screening Results",
          icon: "rtScreening",
          expandable: "true",
          type: "component",
          componentType: "realTimeScanning",
          hasGraph: "false",
          hasTable: "false",
          hasForm: "false",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "date",
              name: "RTSCAN_STATICDATA_UPDATEDATE",
              label: "Last static data update date",
              options: null,
              value: "18/01/2013"
            },
            {
              index: 2,
              inputType: "date",
              name: "RTSCAN_TXNDATA_UPDATEDATE",
              label: "Last transaction update date",
              options: null,
              value: "26/04/2012"
            },
            {
              index: 3,
              inputType: "text",
              name: "RTSCAN_NAME",
              label: "Name",
              options: null,
              value: "RAJ RANI W/O SURESH"
            },
            {
              index: 4,
              inputType: "text",
              name: "RTSCAN_OTHERNAMES",
              label: "Other Names",
              options: null,
              value: " ~ "
            },
            {
              index: 5,
              inputType: "date",
              name: "RTSCAN_DOB",
              label: "Date of Birth",
              options: null,
              value: "01/01/1980"
            },
            {
              index: 6,
              inputType: "text",
              name: "RTSCAN_ACCOUNTNO",
              label: "Account Number",
              options: null,
              value: "ALL"
            },
            {
              index: 7,
              inputType: "text",
              name: "RTSCAN_CUSTOMERID",
              label: "Customer ID",
              options: null,
              value: "610359726"
            },
            {
              index: 8,
              inputType: "text",
              name: "RTSCAN_PASSPORTNO",
              label: "Passport Number",
              options: null,
              value: " "
            },
            {
              index: 9,
              inputType: "text",
              name: "RTSCAN_TAXID",
              label: "Tax ID Number",
              options: null,
              value: null
            },
            {
              index: 10,
              inputType: "text",
              name: "RTSCAN_NATIONALID",
              label: "Aadhaar Number",
              options: null,
              value: null
            },
            {
              index: 11,
              inputType: "text",
              name: "RTSCAN_VOTERID",
              label: "Voter ID Number",
              options: null,
              value: " "
            },
            {
              index: 12,
              inputType: "text",
              name: "RTSCAN_PANNO",
              label: "PAN Number",
              options: null,
              value: " "
            },
            {
              index: 13,
              inputType: "button",
              label: "SCAN",
              function: "modal",
              modalDetails: {
                moduleType: "realTimeScanning",
                modalData: "/api/roboscanapi/dataEntryFormScanning"
              },
              value: null
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section3: {
          id: 3,
          name: "Transaction Details",
          icon: "transaction",
          expandable: "true",
          type: "graph",
          componentType: null,
          hasGraph: "true",
          hasTable: "true",
          hasForm: "false",
          hasSummary: "false",
          formDetails: null,
          tableDetails: {
            HEADER: [
              {
                id: 1,
                sectionName: "section3",
                name: "ROWPOSITION",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 2,
                sectionName: "section3",
                name: "TRANSACTIONNO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 3,
                sectionName: "section3",
                name: "TRANSACTIONID",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 4,
                sectionName: "section3",
                name: "CUSTOMERID",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 5,
                sectionName: "section3",
                name: "CUSTOMERNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 6,
                sectionName: "section3",
                name: "ACCOUNTNO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 7,
                sectionName: "section3",
                name: "GENERATEDALERTSCOUNT",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 8,
                sectionName: "section3",
                name: "ACCOUNTTYPE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 9,
                sectionName: "section3",
                name: "BRANCHCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 10,
                sectionName: "section3",
                name: "TRANSACTIONTYPE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 11,
                sectionName: "section3",
                name: "DEPOSITORWITHDRAWAL",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 12,
                sectionName: "section3",
                name: "CREDITAMOUNT",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 13,
                sectionName: "section3",
                name: "DEBITAMOUNT",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 14,
                sectionName: "section3",
                name: "AMOUNT",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 15,
                sectionName: "section3",
                name: "CURRENCYCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 16,
                sectionName: "section3",
                name: "CONVERSIONRATE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 17,
                sectionName: "section3",
                name: "NARRATION",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 18,
                sectionName: "section3",
                name: "TRANSACTIONDATE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 19,
                sectionName: "section3",
                name: "PRODUCTCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 20,
                sectionName: "section3",
                name: "INSTRUMENTCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 21,
                sectionName: "section3",
                name: "INSTRUMENTNO",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 22,
                sectionName: "section3",
                name: "INSTRUMENTDATE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 23,
                sectionName: "section3",
                name: "COUNTERPARTYID",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 24,
                sectionName: "section3",
                name: "COUNTERACCOUNTNO",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 25,
                sectionName: "section3",
                name: "COUNTERPARTYNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 26,
                sectionName: "section3",
                name: "COUNTERPARTYTYPE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 27,
                sectionName: "section3",
                name: "COUNTERBRANCHCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 28,
                sectionName: "section3",
                name: "COUNTERBANKCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 29,
                sectionName: "section3",
                name: "COUNTERPARTYADDRESS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 30,
                sectionName: "section3",
                name: "COUNTERCOUNTRYCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 31,
                sectionName: "section3",
                name: "ACCTCURRENCYCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 32,
                sectionName: "section3",
                name: "RATECODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 33,
                sectionName: "section3",
                name: "CHANNELID",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 34,
                sectionName: "section3",
                name: "CHANNELTYPE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 35,
                sectionName: "section3",
                name: "FLOWCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              }
            ],
            DATA: []
          },
          graphDetails: {
            graphType: "bar",
            graphList: [
              "bar",
              " line"
            ],
            graphData: {
              ATTRIBUTE: [
                "YEAR",
                "AMOUNT",
                "DEPOSITORWITHDRAWAL"
              ],
              VALUES: [
                [
                  "2012",
                  "1500",
                  "D"
                ],
                [
                  "2012",
                  "1000",
                  "W"
                ],
                [
                  "2012",
                  "1000",
                  "D"
                ]
              ]
            }
          },
          summaryDetails: null
        },
        section4: {
          id: 4,
          name: "Account Profile (Past 6 months)",
          icon: "accountProfile",
          expandable: "true",
          type: "graph",
          componentType: null,
          hasGraph: "true",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "textarea",
              name: "ACCPROFILE_PRODUCT_USED",
              label: "Products Used",
              options: null,
              value: "SB124"
            },
            {
              index: 2,
              inputType: "text",
              name: "ACCPROFILE_TOTAL_DEBIT",
              label: "Total Debit",
              options: null,
              value: "0"
            },
            {
              index: 3,
              inputType: "text",
              name: "ACCPROFILE_TOTAL_DEBIT_COUNT",
              label: "Total Debit Count",
              options: null,
              value: "0"
            },
            {
              index: 4,
              inputType: "text",
              name: "ACCPROFILE_TOTAL_CREDIT",
              label: "Total Credit",
              options: null,
              value: "1500"
            },
            {
              index: 5,
              inputType: "text",
              name: "ACCPROFILE_TOTAL_CREDIT_COUNT",
              label: "Total Credit Count",
              options: null,
              value: "1"
            },
            {
              index: 6,
              inputType: "text",
              name: "ACCPROFILE_ACCOUNT_RISKRATING",
              label: "Account Risk",
              options: null,
              value: null
            },
            {
              index: 7,
              inputType: "date",
              name: "ACCPROFILE_ACCRISK_CHANGEDATE",
              label: "Risk last change date",
              options: null,
              value: null
            },
            {
              index: 8,
              inputType: "textarea",
              name: "ACCPROFILE_LAST_5_ACTIVITIES",
              label: "Last 5 account activities",
              options: null,
              value: null
            },
            {
              index: 9,
              inputType: "radio",
              name: "ACCPROFILE_HASANYOLDREPORT",
              label: "Past CTR or SR or other regulatory reports in this account / customer",
              options: [
                "Y",
                "N"
              ],
              value: "N"
            },
            {
              index: 10,
              inputType: "text",
              name: "ACCPROFILE_IFANYREPORT_COUNT",
              label: "If Yes,\tCount",
              options: null,
              value: null
            },
            {
              index: 11,
              inputType: "date",
              name: "ACCPROFILE_IFANYREPORT_DATE",
              label: "and Date",
              options: null,
              value: null
            }
          ],
          tableDetails: null,
          graphDetails: {
            graphType: "pie",
            graphList: [
              "pie",
              " bar",
              " line"
            ],
            graphData: {
              ATTRIBUTE: [
                "CREDIT_TRANSACTION",
                "DEBIT_TRANSACTION",
                "CASH_CREDIT",
                "CASH_DEBIT",
                "NONCASH_CREDIT",
                "NONCASH_DEBIT"
              ],
              VALUES: [
                [
                  "2500",
                  "1000",
                  "2500",
                  "1000",
                  "0",
                  "0"
                ]
              ]
            }
          },
          summaryDetails: null
        },
        section5: {
          id: 5,
          name: "Links",
          icon: "links",
          expandable: "true",
          type: "graph",
          componentType: "links",
          hasGraph: "true",
          hasTable: "false",
          hasForm: "false",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "date",
              name: "LINK_FROMDATE",
              label: "FROM DATE",
              options: null,
              value: "14/12/2022"
            },
            {
              index: 2,
              inputType: "date",
              name: "LINK_TODATE",
              label: "TO DATE",
              options: null,
              value: "29/12/2022"
            },
            {
              index: 3,
              inputType: "text",
              name: "LINK_ACCOUNTNO",
              label: "ACCOUNT NO",
              options: null,
              value: "ALL"
            },
            {
              index: 4,
              inputType: "text",
              name: "LINK_LEVELCOUNT",
              label: "LEVEL COUNT",
              options: null,
              value: "4"
            },
            {
              index: 5,
              inputType: "checkbox",
              name: "LINK_TRANSACTION_LINK",
              label: "TRANSACTION LINK",
              options: [
                "Y",
                "N"
              ],
              value: [
                "Y"
              ]
            },
            {
              index: 6,
              inputType: "checkbox",
              name: "LINK_STATIC_LINK",
              label: "STATIC LINK",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 7,
              inputType: "button",
              label: "TABULAR LINK VIEW",
              function: "modal",
              modalDetails: {
                moduleType: "tabularLinkView",
                modalData: "/api/roboscanapi/getEntityLinkedDetailsTabView"
              },
              value: null
            },
            {
              index: 8,
              inputType: "button",
              label: "HORIZONTAL GRAPH VIEW",
              function: "modal",
              modalDetails: {
                moduleType: "horizontalGraphView",
                modalData: "/api/roboscanapi/getEntityLinkedDetailsGraphView"
              },
              value: null
            },
            {
              index: 9,
              inputType: "button",
              label: "VERTICAL GRAPH VIEW",
              function: "modal",
              modalDetails: {
                moduleType: "verticalGraphView",
                modalData: "/api/roboscanapi/getEntityLinkedDetailsGraphView"
              },
              value: null
            }
          ],
          tableDetails: null,
          graphDetails: {
            graphType: "hierarchical",
            graphList: [
              "hierarchical"
            ],
            graphData: {
              ATTRIBUTE: [
                "NULL"
              ],
              VALUES: [
                [
                  null
                ]
              ]
            }
          },
          summaryDetails: null
        },
        section6: {
          id: 6,
          name: "Past History",
          icon: "pastHistory",
          expandable: "true",
          type: "form",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "text",
              name: "PASTHISTORY_ALERTCOUNT_6MNTHS",
              label: "This customer had",
              options: null,
              value: "1"
            },
            {
              index: 2,
              inputType: "text",
              name: "PASTHISTORY_ALERTCOUNT_1YEAR",
              label: "alerts in the last 6 months and",
              options: null,
              value: "1"
            },
            {
              index: 3,
              inputType: "radio",
              name: "PASTHISTORY_SAMETXN_AS_PREV",
              label: "This transaction is the same as above alertS",
              options: [
                "Y",
                "N"
              ],
              value: "N"
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section7: {
          id: 7,
          name: "Related Parties",
          icon: "relatedParties",
          expandable: "true",
          type: "form",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 0,
              inputType: "description",
              value: null
            },
            {
              index: 1,
              inputType: "radio",
              name: "RLTDPARTY_ISJOINTHOLDER",
              label: "JOINT HOLDER",
              options: [
                "Y",
                "N"
              ],
              value: "N"
            },
            {
              index: 2,
              inputType: "radio",
              name: "RLTDPARTY_ANY_OTRACCOUNTS",
              label: "CUSTOMER HAS OTHER ACCOUNTS",
              options: [
                "Y",
                "N"
              ],
              value: null
            },
            {
              index: 3,
              inputType: "radio",
              name: "RLTDPARTY_CUSTRELTV_OTRACCS",
              label: "CUSTOMER RELATIVES HAS OTHER ACCOUNTS",
              options: [
                "Y",
                "N"
              ],
              value: null
            },
            {
              index: 4,
              inputType: "radio",
              name: "RLTDPARTY_ISBENEFICIARY",
              label: "CUSTOMER IS BENEFICIARY OF OTHER ACCOUNTS",
              options: [
                "Y",
                "N"
              ],
              value: "N"
            },
            {
              index: 5,
              inputType: "radio",
              name: "RLTDPARTY_HAVE_CORPENTITY_ACC",
              label: "CUSTOMER IS SIGNING AUTHORITY OF CORPORATE ENTITY ACCOUNTS",
              options: [
                "Y",
                "N"
              ],
              value: "N"
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section8: {
          id: 8,
          name: "Ringside View",
          icon: "ringsideView",
          expandable: "true",
          type: "summary",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "false",
          hasSummary: "true",
          formDetails: null,
          tableDetails: null,
          graphDetails: null,
          summaryDetails: {
            PARAGRAPHDETAILS: "In the last 30 days, this alert was breached a total of ^~^ 0 ^~^ times in the bank and ^~^  ^~^ times for customers of the same profile and ^~^  ^~^  times for the base branch of this account.\n                ^~N~^ In the last 30 days, transactions from this branch breached a total of ^~^ 0 ^~^ number of alerts for ^~^ 0 ^~^\n                sets of customers across ^~^ 0 ^~^ sets of account" 
            }
        },
        section9: {
          id: 9,
          name: "User Comments and Notes Start",
          icon: "userComments",
          expandable: "true",
          type: "form",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "textarea",
              name: "USERCOMMENTS_COMMENT",
              label: null,
              options: null,
              value: "MLROCOMMENTS : \nAMLOCOMMENTS : \nAMLUSERCOMMENTS : \nUSERCOMMENTS :"
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section10: {
          id: 10,
          name: "Action Items Start",
          icon: "actionItem",
          expandable: "true",
          type: "form",
          componentType: null,
          hasGraph: "false",
          hasTable: "false",
          hasForm: "true",
          hasSummary: "false",
          formDetails: [
            {
              index: 1,
              inputType: "checkbox",
              name: "ACTION_IS_CASE_ESCALATED",
              label: "Escalate",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 2,
              inputType: "checkbox",
              name: "ACTION_IS_ADDED_TO_WATCHLIST",
              label: "Add To Watch",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 3,
              inputType: "checkbox",
              name: "ACTION_IS_MARKED_HIGH_RISK",
              label: "Mark as High Risk",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 4,
              inputType: "checkbox",
              name: "ACTION_IS_INVESTIGATION_DONE",
              label: "Further Investigate",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 5,
              inputType: "checkbox",
              name: "ACTION_IS_CDD_REQ_TO_BRANCH",
              label: "Raise CDD request to branch",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 6,
              inputType: "checkbox",
              name: "ACTION_IS_CLOSED_WITHOUTSTR",
              label: "Close without a case",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 7,
              inputType: "checkbox",
              name: "ACTION_ISMARKED_FALSEPOSITIVE",
              label: "Mark as false positive",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 8,
              inputType: "checkbox",
              name: "ACTION_IS_MARKED_FOR_FOLLOWUP",
              label: "Mark for Follow up",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 9,
              inputType: "checkbox",
              name: "ACTION_IS_DESKTOP_CLOSED",
              label: "Desktop Closure",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            },
            {
              index: 10,
              inputType: "checkbox",
              name: "ACTION_IS_INVESTIGATED",
              label: "Investigated",
              options: [
                "Y",
                "N"
              ],
              value: [
                null
              ]
            }
          ],
          tableDetails: null,
          graphDetails: null,
          summaryDetails: null
        },
        section11: {
          id: 11,
          name: "Customer Case Details",
          icon: "custDetails",
          expandable: "true",
          type: "table",
          componentType: null,
          hasGraph: "false",
          hasTable: "true",
          hasForm: "false",
          hasSummary: "false",
          formDetails: null,
          tableDetails: {
            HEADER: [
              {
                id: 1,
                sectionName: "section11",
                name: "CASENO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 2,
                sectionName: "section11",
                name: "DESCRIPTION",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 3,
                sectionName: "section11",
                name: "CUSTOMERID",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 4,
                sectionName: "section11",
                name: "CUSTOMERNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 5,
                sectionName: "section11",
                name: "USERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 6,
                sectionName: "section11",
                name: "AMLUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 7,
                sectionName: "section11",
                name: "AMLOUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 8,
                sectionName: "section11",
                name: "MLROUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 9,
                sectionName: "section11",
                name: "USERCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 10,
                sectionName: "section11",
                name: "AMLUSERCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 11,
                sectionName: "section11",
                name: "AMLOCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 12,
                sectionName: "section11",
                name: "MLROCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 13,
                sectionName: "section11",
                name: "USERTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 14,
                sectionName: "section11",
                name: "AMLUSERTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 15,
                sectionName: "section11",
                name: "AMLOTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 16,
                sectionName: "section11",
                name: "MLROTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              }
            ],
            DATA: [
              [
                "120295",
                "Assigned to AMLUser by System",
                "610359726",
                "RAJ RANI W/O SURESH",
                "SYSTEM",
                "AMLUSER",
                null,
                null,
                null,
                null,
                null,
                null,
                "11/11/2022",
                "11/11/2022",
                null,
                null
              ]
            ]
          },
          graphDetails: null,
          summaryDetails: null
        },
        section12: {
          id: 12,
          name: "Alert Details",
          icon: "entityLink",
          expandable: "true",
          type: "table",
          componentType: null,
          hasGraph: "false",
          hasTable: "true",
          hasForm: "false",
          hasSummary: "false",
          formDetails: null,
          tableDetails: {
            HEADER: [
              {
                id: 1,
                sectionName: "section12",
                name: "ALERTNO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 2,
                sectionName: "section12",
                name: "ALERTMESSAGE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 3,
                sectionName: "section12",
                name: "ALERTPRIORITY",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 4,
                sectionName: "section12",
                name: "INSTRUMENTCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 5,
                sectionName: "section12",
                name: "INSTRUMENTNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 6,
                sectionName: "section12",
                name: "ACCOUNTNO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 7,
                sectionName: "section12",
                name: "CUSTOMERID",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 8,
                sectionName: "section12",
                name: "CUSTOMERNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 9,
                sectionName: "section12",
                name: "BRANCHCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 10,
                sectionName: "section12",
                name: "BRANCHNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 11,
                sectionName: "section12",
                name: "TRANSACTIONNO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 12,
                sectionName: "section12",
                name: "TRANSACTIONDATETIME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 13,
                sectionName: "section12",
                name: "AMOUNT",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 14,
                sectionName: "section12",
                name: "ALERTDATE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 15,
                sectionName: "section12",
                name: "ALERTCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 16,
                sectionName: "section12",
                name: "ALERTSTATUS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 17,
                sectionName: "section12",
                name: "DEPOSITORWITHDRAWAL",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 18,
                sectionName: "section12",
                name: "CALCULATEDVALUE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 19,
                sectionName: "section12",
                name: "BENCHMARKVALUE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 20,
                sectionName: "section12",
                name: "PRODUCTCODE",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "STRING"
              }
            ],
            DATA: [
              [
                "8042019182822358760",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-02 00:00:00",
                "500000",
                "2019-04-08 18:28:22.358",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019182822358844",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-03 00:00:00",
                "500000",
                "2019-04-08 18:28:22.358",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019183314744760",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-02 00:00:00",
                "500000",
                "2019-04-08 18:33:14.744",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019183244452760",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-02 00:00:00",
                "500000",
                "2019-04-08 18:32:44.452",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019183244452844",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-03 00:00:00",
                "500000",
                "2019-04-08 18:32:44.452",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019202344258137",
                "CC_HIGH_VALUE_CASH_WDL_TXNS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-03 00:00:00",
                "500000",
                "2019-04-08 20:23:44.257",
                "OFL_IBA_HGH_VALUE_CC_CASH_WDLS",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "8042019202344258057",
                "CC_HIGH_VALUE_CASH_WDL_TXNS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-02 00:00:00",
                "500000",
                "2019-04-08 20:23:44.257",
                "OFL_IBA_HGH_VALUE_CC_CASH_WDLS",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ],
              [
                "461927",
                "Customer has been the subject of inquiry from any law enforcement agency relating to criminal offences ",
                "8",
                " ",
                " ",
                "ALL",
                "610359726",
                "RAJ RANI W/O SURESH",
                "5023",
                " ",
                "0",
                null,
                "0",
                "2022-11-11 13:32:59.979",
                "SA_RAS_IBA_CUSTOMER_WITH_CRIMINAL_OFFENCES",
                "1",
                " ",
                "0",
                "0",
                " "
              ],
              [
                "8042019183314744844",
                "CC_HV_TXNS_FOR_JEWELLERY_BETTINGS",
                "6",
                " ",
                " ",
                "0000000006101001862",
                "882382494V",
                "882382494V",
                "006",
                null,
                "0",
                "2018-04-03 00:00:00",
                "500000",
                "2019-04-08 18:33:14.744",
                "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                "1",
                " ",
                "500000",
                "100000",
                "CRD"
              ]
            ]
          },
          graphDetails: null,
          summaryDetails: null
        },
        section13: {
          id: 13,
          name: "FY-Wise Account Summary Details",
          icon: "summaryDetails",
          expandable: "true",
          type: "graph",
          componentType: null,
          hasGraph: "true",
          hasTable: "true",
          hasForm: "false",
          hasSummary: "false",
          formDetails: null,
          tableDetails: {
            HEADER: [
              {
                id: 1,
                sectionName: "section13",
                name: "CASENO",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 2,
                sectionName: "section13",
                name: "DESCRIPTION",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 3,
                sectionName: "section13",
                name: "CUSTOMERID",
                clickable: "TRUE",
                apiUrl: null,
                dataType: "NUMBER"
              },
              {
                id: 4,
                sectionName: "section13",
                name: "CUSTOMERNAME",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 5,
                sectionName: "section13",
                name: "USERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 6,
                sectionName: "section13",
                name: "AMLUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 7,
                sectionName: "section13",
                name: "AMLOUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 8,
                sectionName: "section13",
                name: "MLROUSERCODE",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 9,
                sectionName: "section13",
                name: "USERCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 10,
                sectionName: "section13",
                name: "AMLUSERCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 11,
                sectionName: "section13",
                name: "AMLOCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 12,
                sectionName: "section13",
                name: "MLROCOMMENTS",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "STRING"
              },
              {
                id: 13,
                sectionName: "section13",
                name: "USERTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 14,
                sectionName: "section13",
                name: "AMLUSERTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 15,
                sectionName: "section13",
                name: "AMLOTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              },
              {
                id: 16,
                sectionName: "section13",
                name: "MLROTIMESTAMP",
                clickable: "FALSE",
                apiUrl: null,
                dataType: "DATE"
              }
            ],
            DATA: []
          },
          graphDetails: {
            graphType: "bar",
            graphList: [
              "bar",
              " line"
            ],
            graphData: {
              ATTRIBUTE: [
                "YEAR",
                "NOOFCASES",
                "ALERTCODE",
                "ASSIGNEDCASENO",
                "CASEDATE"
              ],
              VALUES: [
                [
                  "2022",
                  "2",
                  "OFL_IBA_HGH_VALUE_CC_CASH_WDLS",
                  "120295",
                  "2022-11-11 00:00:00.0"
                ],
                [
                  "2022",
                  "6",
                  "OFL_IBA_HGH_VALUE_CC_FOR_JEWELLERY_BETTING",
                  "120295",
                  "2022-11-11 00:00:00.0"
                ],
                [
                  "2022",
                  "1",
                  "SA_RAS_IBA_CUSTOMER_WITH_CRIMINAL_OFFENCES",
                  "120295",
                  "2022-11-11 00:00:00.0"
                ]
              ]
            }
          },
          summaryDetails: null
        }
      }
    },
    headerOptionData: {
      header: {
        HEADER_ALERTNAME: "Customer has been the subject of inquiry from any law enforcement agency relating to criminal offences ",
        HEADER_CUSTOMER_NAME: "RAJ RANI W/O SURESH",
        HEADER_ACCOUNTNO: "ALL",
        HEADER_ALERTSCOUNT: "1",
        HEADER_CASEALERTSCOUNT: "1",
        HEADER_HASANYOLDCASES: "does not have",
        HEADER_CASE_RATING: null,
        HEADER_CASE_ID: "120113",
        HEADER_ALERTS_BREACHED: "1",
        HEADER_DESCRIPTION: "Customer has been the subject of inquiry from any law enforcement agency relating to criminal offences ",
        HEADER_ISBANK_EMPLOYEE: "N"
      },
      option: {
        OPTION_SAVE_ROBOSCAN_WITHCASE: null,
        OPTION_INTRNL_DISCUSSION_FLAG: null,
        OPTION_REMIND_REVIEW_IN_3DAYS: null
      }
    }
  }