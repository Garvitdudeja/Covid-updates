import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';




export default function News() {
    const [NewsData, setNewsData] = useState([]);
    const reqData = async () => {
        const getData = await axios.get('news/trending');
        setNewsData(getData.data.items);
    };
    const i = 1;
    useEffect(reqData, []);

    return (<>
        <div className="pb-5">
            <div className="p-4 flex flex-row items-center">
                <div className="h-16"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX///9HR0f4+Pj39/dDQ0M4ODg9PT37+/tAQEA2NjbCwsLOzs5KSkpmZmZTU1NYWFjb29uTk5PY2Njr6+ujo6MtLS28vLyBgYFycnJ5eXlVVVW0tLTi4uLx8fGCgoKKioptbW2dnZ2pqalfX18qKiqOjo7IyMghISFhNMMoAAARy0lEQVR4nO1dgXqjqhJWQNGtMdsmaW0a27TZ9r7/G15mAKMRENEke/bzv/d0YyIMPwwDKMNE0YIFCxbcD5TeVTy5uni+2VxbhBNXF89JfWUJbtCaXFkCIZxfWYRTPCdXFk8jyoM6AiUU/j9RPBH5BFGkFMQPNz+nNQ9rQlEvlIvCTaMIeQTJl+LpoJWC7MW9ASIolEtUfqACKAjxdZB4rBZChsUTARpSSNpU/BSKBFshIAORsPnkTA3kOFTjWAkUJXD1OZQiqE8ULl5/tosXP9EwO0OFenJhIaR+hfZF6ErwZ/RggQoEdobLwljFE6QYqqKYjJ6vRyNYPNrejnhLHYlKkK04FsKCag2NiJI5OhPQAWHn6PgWlOL5oHjoA6J5Q+aEOLyoTCkIpAEDGlqYIDOKDJV4gqpgViHZiUIkyKmyyhV6EbdpiQOgncSuX+60rTYkYClNmWAfJ1EdzlD2AewSAb1QKCcMZuNVVArtijdmUoN1oKFTLqnaMG2iPKgTUtBuGqLcUnBbvM1UUV6TwOlaaz1JrVU4lAPYmaCUUWs9iTVk5ADaAToSOqfnSgYPI0jlbCvEAHuKrzksCaasCgjRw1FQH6RoBcLXTERWDrESBH4TV51yGkOCWrBGExdNKYCsYWLpg6AdfPK6DimGGHuQLEa0iY8VkKJtKgVDSHgfaACVFGKpYFknrNxU+SjekgkMtXM8t+BhloqLgaqepKKNeGsmpA63ojOA1GS6Bg3KuLKAIfHXJrhgwYIFCxYsWLBgwYIFCxYssOPn1zj8tP6G4aeV+vkGjyXWeTIOcZokxcg0HWRF1nz+39P1Ga5YPBL7eD02SQfFvmw+57//RobxqphCsCzjoqH4dzJci1acRDA+U/wrGYKKhlMsJTdN8ZYMmR+yfQZ/S8/bL1EU+kN5a4brlR+qi3/H4XhsPkqKt2OY/FxfUhcFUvynGaKi/tMM0dz8QwxpffHutkCLenOG9FXhU//8VYmrCrek/1SvLRyj6PMFfvvq3Kmvtni1lRc/36eYxWxffZ0naThrKNitGdZpJseE3UH9/JE0V2952+7/EZzykmXpWt25TsW36al9lT/Dx6d9nolhAgakdFfqKpDzouwGDKuszVAP/9mLZgg/J5Jh2h66d6LoOQz9O7VNbCcTysVCjffmkO5nx1qTmPSxw/AWWnraMwPDRrSLIYlhdqPuFHQxndTDnwTpiE+bpDWFEcm0D8btGK6ytYkhO9oYphL/E99U4vZ98oY3fqlfpRZu4Sp7FZ8eU5iqsSTP85Q12d6UIYOZZo9hnD+cGeYthun2awv41KzKd7yxYu2aQd1PgbtQEZiL/tocnr6O+a6x2TdlKCh2GMo/qzPDosVw19oM8Rs0k0njkunGP5cfKobGMLKrlo02j03q2zKM122G7IilzX80w3VbS3etYY1jMXd1Q1Zr9AG7YSI+UZy6sNee3NkZ1l9vZsiFUJth+oas2VoxXHf6YbsNo9fGSuGPJ7gC1XxOdDeMStSI9Hjolmd+hoc/qRlxn+GntIs4mn1k+66lST8lnpqvUuiSLxlYGXGZQbf8brph9CrVl+UvXTLzM0xiF9oMs+/ohI1YbLjBlmZYMTssPlYFGpcC+x0kKyI0L9o+PeyUiCw/th87eTDcjHoQN4bhS/SAjcje7OOhHCMIfpXxaLODGolA5ZNajfeplPyR6zRs937eUzTMsN6M2oU4giGrokgYG7ZaJUrfrAzlqCCK+SvBfgcqmTzICmqGvo9dkypNm2YZZOjaIGnyRBjD8IimcbVK1184YF9oKSJvjfPJc/SZ4mAPA326jbZiMtuMEGKCw5JmNrj3ZUgcGy0pekpcLFY0w+wSZobRa3I8QSNuLxlm7x+Ad5kAO6LouDDeiwkbNF7xGH0Up1WRt3rd8z5XHOVk3IMhem3YfsLd+he/K4bs4/0ChZnh71VxrLLk6+2SYWe0iDh8JyYHMO8UI2WdsrKKo/VqX1ZF58afkyxApkdGN0NKax5ZDE2z/bWrx4ph1ru/u3pSDEXS71VWrVixveyHu27F4ojIMHcwouuiKnYboZQs/r4QJJMzvdhyMiTo+WPeMd7aSN6hOI4hjejheCrECI4FcTD8gnzlQPghLr+PhbyCboj+KeeGeMEeUXowBA/byOJHiqz0Ltu2oo5kKBI+npqHxXYtlbO1eBXLAZ7/CBvMjjB9S35zEH/IPzWJI4ub6a6TIa1r9A8zaWnjXqc8+M6tOIIhzEoExYM2DheW5kX2X92fcChQAzwmWldVBTMGjrviD7s0L9/ffh5+VXKQHF4Bi7Jb3SfJ2flMefAFMGSn94hDyo/UxFBb4z+d9FBYEM+L4lUwfF1nlRR/QGObJokaMJrHI1aGBH23avNoqLwVovPf8QzZPl5hHUZ1bmSosFPpt+pbMU8A3a5OwLA6Jlsp/pC3E8WJbkIrQ4LDALd4VZCzEy9BF5bz1n1fhmx1rCrpCojD+CBD9fQCBnqwcl+gpIJh/kCwHQ67dqL82Mi1MATHNEKIdT4DBaOqKrrOQ54Mk/0pWVXKIpOd0kj9rK09U9BaGv1R9zygDv2kyHAP0zOo33q1S9XqP0vkasPFULqMcKuLrTynAS3NpQOfJ8Pvl5f3x0dtxd5eXxCv8nmpupKodAbf6p4aW76uPsTS6vt124g/bKs9E91w/fLcLreRIZylIEjYN/2rbqe8ocn4Eb/xU7dJcEIP0epvSzzvj95GhtoL3CpCu7dJ/8FOnp4MwX8x+MSORryPd59dSyPXokkrMO1J8GFY1zVFigNMrFDOfQbxffQZEhAvVNS9KlSHBPCe/6AHQzB9tbsGh8C1A+Gw81uPIaHSi3lIvnIg7EkYZlijjQ5vQCmemMX3cclQHuPh41zI0UmvV04Phnhiw+RjaaCYPh50lwxhhunpo825yYfMgyFMlTzynwn9NuRiHeJXwUZjO8yQgPfge1H6Ayff24sUe/yfHfr1W48hiJ+iQR6WBhYtr/rhfANm3W+Dk+vz1M4PzLo+JJdviednCPa3zzC2bvFiIQwdK+CJ5zZ5jvgGhqWNYouhY6Pb5U8+a/wbM7RSPDPcOxiW5cX1fRgWuYOhjWLD0EWwR/E+DMvC1YY2iorhnxje7zqQZa2LHbsHQ0HAzdBMUTLcPA3id+fq9gwzKP4AQ2aiyKpeZiNwO4YnLPwAQ2Mr/m0MmYXhUT7zHWJooDgHwxl3DB3S0qKlg6OFjeIMDOfc9XVIcNfOBIa9vjid4aw790Q/BIoTGPZaMetvsBiB2XdfgqUpSjaJ4QXFclobzr2DVr7/Kqcx7Cjq3ns87AyMmlI89y5oOVoUxSSGrVZk+2ZO457RtJGK2Y2e08icrrDbZCJDTVEQDFk9lUWzPpQ7if6OtYWJImwrCVkflsXfuHrqAvsiriaCVsCF11vuuzKEdpDLpSCGfu/x78yQneSKTzFMRvoF/QcY7lVflAy/9utR8HiPf2+GoKLluR+G4q9lyOR+VKD4bzJk2vNQUPw3GTaulWLQyP5Fhm3f0TKexPBKcxo2bV7adY4tJq2erjQvLSfNS/dzrg+vs7YQfaf3gz/Dywe/Ey0NK+dfHwrFmMCw92RbMnzu7EFx4ONd/qMZ4tPweRmC5ocz7D+617O23rZjI+IC/0nbs7aymJNhjl07mKHBA3/UzLvxXuusnso5nyYyzNLwvLTtf2h95m06YkAy3HqdWHB2z+uuD+dkKItuaMNymKGRoG7DwuOUjDPBO7x7OqF0N0PzIRFaS62vUE0E7/J2DeRrhpXptJrYfM6M3Er5uUvizHyDBmPtzO7AEKpYMySwudMbkOLp+fn517MTnZ9/3YOhoHiXEwduyPBOZyrMwLC1QeUeDJ2RYOZh2ArPdw+GzuiAszBs71O7A0P3Nrk5GFI+2mdmTlB3qJQZGNLOXsoRDGFT9vTYhWRgl6mVIcap8Tihn9O6c58nww3gcNhMx0H918MAQ+IbnJBehOfz9bdI4iNL0yxL2DFOLO7fw0j2xyNbnUwZDDzzRmpCvclQSC6K+2jH+65lRaVmmayoyvGH1am0p2O2OmXHUz8D++7LM0GE3atE3ohxn/hoW1ojQSb3lDZkRxNk62pdVcciNlSRk2G7TZyKio4ZdSeYpx/DDZSqXK3KKRTZqTrtX/fZ2pjaxVAGudHRAR2tSHkd1RcRUbwYkhpef8EZSadYUgxheDoKBd9XhVnHHQyRUis6oNWi8ppieL7RPjOcb8QFema9yrdLq9JYShdYtspWq+pkWzU6GLacC5V7mpkhRQfayz3TXm3IN7s/uTwWL90JpKvdaBSnbFf8Kdd/zD//ybidYSf8IozJRoZUWBned3nwYtgNzzchOmA97HFhYahdQ7ktOiDG4TVFB/Rrw0YEtwd3c4JSjLTr4fxm6odNlE7p6maJDgiBag3b+v0sjezmGGg3LLacf3RAA0Np+zGgdBMJsQfpQWuQMIJhJMPzTYgO6NP2VoaR6inmFkT/RGMASz8t5efwfEEqSmzi+zBqqRJv9e4TY3xNLZ3Ab8RXFK3h+ZyoiQxO6Fc1phFfUbSqKFXRD40SPNcWcqpEA+M72sX3YZy1cT0kmp3x0ZGbWg4E8V8fkhAFjZRrrH/NWGbexBGcEKL32s2YH0Oy3X6+fX29fW4D4JeyezJkb/XEuSM6oDwuw1JlvutDsYI7nbKQNWGZJOvV8G1De6Lc0QEdzx5GnPxhWvN4oFiLRfMwJr23II6HW2MYBqLwOoz+zrsvJzH0w/UYygM6UjPDwsFw/ALKi2E8O8PEwnCPb2bUWZ7C0vTfwJeG7y5f0jtuSTvpG0sjX1Qml8cphoNKhsnlg3aeyD0RUhJ9NOHT+K3/Dd2fI1WX5vJMgNS/3rPtpxxdILNbhzB9sOlUOPAcqvMJyBqPKZ4vujamuSLwPEZ9uus8UOf87rqNRZHg+XyqW4HKo4fS7Yx5KmN60YhbJkMU3CDcSweyCWc+ZLdSmbZ74pPcZXNzJZWnh86rpCJXNdal53o7qL0w+Zsj3RVw6J58OxuOyqEnfVBfPOlnmkXQcikYD5k6G+s4c8ZPqQ7u8g3mhgszGvcV9+qgj80Rbg/Dd4/Dp6aYJo8Pn6mej2U3NKT86VEfzgwHnc6OV9Yc4J+k561YJ393kL3twgv79S5ptjIWkzbg2nBi5z2CrRm1v0/P+vxxP84bCCCMdiOz2F+n879qRb08kMMX696HsPTF8VrW7TGXbuLBayJVxOCYVpiescsTamfE04mx4BZsijghLtk6Zslqdivawa9VGvgopqE4gSBL4/Wv4UJOxNPnKs7Hxj08o4hD0+Y5O33eaA5MN08Pt8fTYep5cAsWLFiwYMGCBQsWLFiwYMGC/xzGhc4LlHHPZw4jQ+cFgW5CNtHOBI+t4pPhFQDgesIvY+O1EbR/2SRjyLvKghnEw25uOw25l93Dg88NkBHSiOBS1gtOOFq2K5QItC/utp9EkThlOBOiS4srHM4gMKQVsdXvOTrgFDdQKtVkfA6Nx9mAd51TOMYMs+0zbTGf0IpUhuez72W1ocUrmCJ6/VBzbEDVgsq7LZwigd3iIYqGLaj7oIenqwk1x4A6ls3mOjqgCroVaO+pkjG6fqT/INchsYIogvdrRGqb25o9OuAoGSJ7cJQemxD10sO7zikcbIzdAqDq6th5zRejZRCXDAfI2RVEKs/4CgYVJY6hkJ4ZUgwkGGQMQYZPxKZ+UtKokIxnOzoTinGOHOnQoUPHduyFXvOTQQZkuEDoWT/PvoQjhMMgSIg9dJ504JNOhP3Ycp5l5AMy3KkjSVFa89GZyLhyrtrVgd3kWBLSDsMyHFBueURNGcdmwqUTulN4Y56D/Qelo3voTEFPRnkIwVqFznOn0xRJkIoKGfWwDAdawQnH90EIbEeHBxiqqy/EvU4G4p2yKDn7L443Mugj7TG6IUWbG/RMMhzgyn9xdC4YGrD2Uh+4NegJgAw/GDQLagFWzSGzNRjnLVGO+zK4dWU1IAMm3JPX59wRzNeVrPaKCylBwkLBjpLhyidMDXg9VX3+Dhku8TcQPvnRzoIFC/5d/B9r8VvTl2FfMgAAAABJRU5ErkJggg=="
                    className="h-full" alt="News" /></div>
                <h1 className="font-bold text-4xl sm:text-sm">News</h1>
            </div>
            <Card>

                {NewsData.map((data) => {
                    return (
                        <a href={data.url} target="_blank">
                            <Card.Body className="shadow-md m-0 px-0 py-2">
                                <div className="flex flex-row items-center">
                                    <div className=" w-64 p-2  sm:w-48" >
                                        <img src={data.urlToImage} alt="" className=" min-w-full md:h-36 max-h-40" />
                                    </div>
                                    <h3 className=" w-10/12 text-3xl p-4 sm:text-sm">
                                        {data.title}<br></br>
                                        <span className="text-base sm:hidden text-gray-400">{data.description}</span>
                                    </h3>
                                </div>

                            </Card.Body>
                        </a>
                    )
                })}
            </Card>
        </div>
    </>)
}
