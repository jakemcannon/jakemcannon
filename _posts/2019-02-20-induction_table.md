---
layout: post
title:  "Induction and Recursion"
date:   2019-02-26 23:02:00 -0500
mathjax: true
---

**Under Construction - Come Back soon**

This is a repository of some induction proofs along with tutorials that I have completed. Mathematical induction was frustrating me to no end so in an attempt to understand mathematical induction more seriously I completed all of these problems as well as made explanations for them. Below is the outline that my school followed for teaching mathematical induction in my discrete math course. It follows chapter 5 from [Discrete Mathematics and Its Applications 8th edition](http://www2.fiit.stuba.sk/~kvasnicka/Mathematics%20for%20Informatics/Rosen_Discrete_Mathematics_and_Its_Applications_7th_Edition.pdf).

My hope is that these tutorials help you learn induction easier and more quickly then I did.

This post may be updated in the future to cover recursive algorithms after I complete my algorithms class.

### Basic Problems

| Problem                                                      | Source                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Show that if n is a positive integer then, 1 + 2 + … + n = $\frac{n(n+1)}{2}$ | Rosen text book 5.1 Example 1                                |
| $1^3$ + ​$2^3​$ + ... + ​$n^3​$ = ​${\frac{n^2(n+1)^2}{4}}​$       | [Organic Chem tutor video example](https://www.youtube.com/watch?v=tHNVX3e9zd0) |
| $1^3$ + $2^3​$ + ... + $n^3​$ = ${\frac{n^2(n+1)^2}{4}}​$       | Organic Chem tutor Video                                     |
| Let P(n) be the statment that $1^2$ + $2^2​$ + … + $n^2​$ = ${\frac{n(n+1)(2n+1)}{6}}​$ | Rosen text book Example 3                                    |
| 1 + 2 + $2^2$ + .. + $2^{n-1}​$ = $2^n​$ -1                    | Organic Chem tutor                                           |
| Prove that for ever natural number n $2^0$ + $2^1$ + … + $2^n$ = $2^{n+1}$ - 1 | How to prove it example 6.1.1                                |

### Inequaities

| Problems                                              | Source                                                       |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| Prove $2^n$ > 2n for all n $\geq$ 3                   | [The Math sorcerer](https://www.youtube.com/watch?v=g0EFrCYgl5s&t=266s) |
| Prove that $3^n$ > 2n for every positive integer      | Quiz from class                                              |
| $4^n$ $\geq$ 1 + 3n for all n $\epsilon$ $\mathbb{Z}$ | [unknown but simlar to this](\mathbb{N}$)                    |



### Division

| Problems                                                     | Source              |
| ------------------------------------------------------------ | ------------------- |
| Prove that $\forall$ n $\epsilon​$ in $\mathbb{N}​$   3 divides ($n^3​$ - n) | Rosen 5.1 Example 8 |
| Use Mathematical Induction to prove that $7^{n+2}$ + $8^{2n+1}$ is divisible by 57 for every non-negative integer n | Rosen 5.1 Example 9 |



### Strong Induction

| Problems                                                     | Source                                    |
| ------------------------------------------------------------ | ----------------------------------------- |
| Use strong induction to show that every positive integer n can be written as a sum of distinct powers of two, that is, as a sum of a subset of the integers $2^0 = 1,  2^1 = 2, 2^2 = 4$ and so on. <br />Hint: for the inductive step, separately consider the case where k + 1 is even and where it is odd. when it is even, note that (k + 1)/2 is an integer. | problem number 12, quiz problem           |
| Prove that $3^n$ > 2n for every positive integer             | Quiz from class                           |
| $4^n$ $\geq$ 1 + 3n for all n $\epsilon$ $\mathbb{Z}$        | [unknown but simlar to this](\mathbb{N}$) |
